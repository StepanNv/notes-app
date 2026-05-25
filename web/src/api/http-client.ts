import { useAuthStore } from '../stores/useAuthStore';
import { HttpClient } from './generated/http-client';

export const httpClient = new HttpClient({
  baseURL: 'http://localhost:3000',
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
