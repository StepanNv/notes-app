/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type {
  AuthControllerRefreshData,
  AuthControllerSignInData,
  AuthControllerSignOutData,
  AuthControllerSignUpData,
  SignInDto,
  SignUpDto,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  static readonly paths = {
    authControllerSignUp: "/auth/sign-up",
    authControllerSignIn: "/auth/sign-in",
    authControllerSignOut: "/auth/sign-out",
    authControllerRefresh: "/auth/refresh",
  } as const;

  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerSignUp
   * @summary Регистрация в системе
   * @request POST:/auth/sign-up
   * @response `201` `AuthControllerSignUpData`
   */
  authControllerSignUp = (data: SignUpDto, params: RequestParams = {}) =>
    this.http.request<AuthControllerSignUpData, any>({
      path: `/auth/sign-up`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerSignIn
   * @summary Вход в систему
   * @request POST:/auth/sign-in
   * @response `201` `AuthControllerSignInData`
   */
  authControllerSignIn = (data: SignInDto, params: RequestParams = {}) =>
    this.http.request<AuthControllerSignInData, any>({
      path: `/auth/sign-in`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerSignOut
   * @summary Выход из системы
   * @request POST:/auth/sign-out
   * @response `201` `AuthControllerSignOutData`
   */
  authControllerSignOut = (params: RequestParams = {}) =>
    this.http.request<AuthControllerSignOutData, any>({
      path: `/auth/sign-out`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRefresh
   * @summary Обновление токенов авторизации
   * @request POST:/auth/refresh
   * @response `201` `AuthControllerRefreshData`
   */
  authControllerRefresh = (params: RequestParams = {}) =>
    this.http.request<AuthControllerRefreshData, any>({
      path: `/auth/refresh`,
      method: "POST",
      format: "json",
      ...params,
    });
}
