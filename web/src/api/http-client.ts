import { useAuthStore } from '../stores/useAuthStore';
import { Auth } from './generated/Auth';
import { HttpClient } from './generated/http-client';
import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { authController } from './auth-controller.ts';
import { AxiosError } from 'axios';

export const httpClient = new HttpClient({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  // Другие параметры по необходимости
  securityWorker: () => {
    const accessToken = useAuthStore.getState().accessToken;

    if (!accessToken) return;

    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  },
});

httpClient.instance.interceptors.request.use(async (config) => {
  // Если запрос на refresh, то пропускаем
  if (config.url === Auth.paths.authControllerRefresh) {
    return config;
  }

  // Если нет access token в authorization header, то пропускаем
  // (сработает на не защищённые роуты
  // или если будет запрос на защищённый роут, то будёт 401 и отработает interceptor response ниже)
  if (!config.headers.Authorization) {
    return config;
  }

  // Если есть access token, то проверяем его срок действия
  const accessToken = config.headers.Authorization?.toString().split(' ')[1];
  const accessTokenExp = jwtDecode<JwtPayload>(accessToken).exp;

  // Если нет срока действия, то удаляем access token из store и выбрасываем ошибку
  if (!accessTokenExp) {
    useAuthStore.getState().setAccessToken(null);
    throw new Error('Invalide access token, please login again');
  }

  // Если срок действия истек, то пробуем сделать ротацию токенов, если не получилось, то удаляем access token из store и выбрасываем ошибку
  if (accessTokenExp < Date.now() / 1000) {
    try {
      const { data } = await authController.authControllerRefresh();
      config.headers.Authorization = `Bearer ${data.accessToken}`;
      useAuthStore.getState().setAccessToken(data.accessToken);
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 401) {
          useAuthStore.getState().setAccessToken(null);
        }
      }
      throw e;
    }
  }

  return config;
});

httpClient.instance.interceptors.response.use(
  // Если запрос успешен, то пропускаем
  (response) => {
    return response;
  },

  // Если запрос не успешен, то делаем проверки
  async (error) => {
    // Если статус не 401, то выбрасываем ошибку
    if (error.response?.status !== 401) {
      throw error;
    }

    // Если был запрос на refresh и 401 статус, то удаляем access token из store и выбрасываем ошибку
    if (error.config?.url === Auth.paths.authControllerRefresh) {
      useAuthStore.getState().setAccessToken(null);
      throw error;
    }

    // Если уже был запрос на ротацию токенов, то выбрасываем ошибку
    if (error.config._retry) {
      throw error;
    }
    error.config._retry = true;

    // Если не был запрос на refresh, то пробуем сделать ротацию токенов,
    // если не получилось, то удаляем access token из store и выбрасываем ошибку
    try {
      const { data } = await authController.authControllerRefresh();
      useAuthStore.getState().setAccessToken(data.accessToken);
      error.config.headers.Authorization = `Bearer ${data.accessToken}`;
      return httpClient.instance.request(error.config);
    } catch (e) {
      useAuthStore.getState().setAccessToken(null);
      throw e;
    }
  },
);
