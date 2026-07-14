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
  AuthControllerPasswordResetData,
  AuthControllerRefreshData,
  AuthControllerSignInData,
  AuthControllerSignOutData,
  AuthControllerSignUpData,
  ConfirmEmailVerificationDto,
  ConfirmPasswdResetDto,
  EmailConfirmationControllerNewPasswordResetData,
  EmailConfirmationControllerNewVerificationData,
  PasswdResetDto,
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
    authControllerPasswordReset: "/auth/password-reset",
    emailConfirmationControllerNewVerification:
      "/auth/email-confirmation/verification",
    emailConfirmationControllerNewPasswordReset:
      "/auth/email-confirmation/password-reset",
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
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerPasswordReset
   * @summary Сброс пароля
   * @request POST:/auth/password-reset
   * @response `201` `AuthControllerPasswordResetData`
   */
  authControllerPasswordReset = (
    data: PasswdResetDto,
    params: RequestParams = {},
  ) =>
    this.http.request<AuthControllerPasswordResetData, any>({
      path: `/auth/password-reset`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags EmailConfirmation
   * @name EmailConfirmationControllerNewVerification
   * @request POST:/auth/email-confirmation/verification
   * @response `200` `EmailConfirmationControllerNewVerificationData`
   */
  emailConfirmationControllerNewVerification = (
    data: ConfirmEmailVerificationDto,
    params: RequestParams = {},
  ) =>
    this.http.request<EmailConfirmationControllerNewVerificationData, any>({
      path: `/auth/email-confirmation/verification`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags EmailConfirmation
   * @name EmailConfirmationControllerNewPasswordReset
   * @request POST:/auth/email-confirmation/password-reset
   * @response `200` `EmailConfirmationControllerNewPasswordResetData`
   */
  emailConfirmationControllerNewPasswordReset = (
    data: ConfirmPasswdResetDto,
    params: RequestParams = {},
  ) =>
    this.http.request<EmailConfirmationControllerNewPasswordResetData, any>({
      path: `/auth/email-confirmation/password-reset`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
