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
  UpdateMeDto,
  UsersControllerGetMeData,
  UsersControllerUpdateMeData,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> {
  static readonly paths = {
    usersControllerGetMe: "/users/me",
    usersControllerUpdateMe: "/users/me",
  } as const;

  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetMe
   * @summary Получить информацию о себе
   * @request GET:/users/me
   * @secure
   * @response `200` `UsersControllerGetMeData`
   */
  usersControllerGetMe = (params: RequestParams = {}) =>
    this.http.request<UsersControllerGetMeData, any>({
      path: `/users/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerUpdateMe
   * @summary Обновить информацию о себе
   * @request PATCH:/users/me
   * @secure
   * @response `200` `UsersControllerUpdateMeData`
   */
  usersControllerUpdateMe = (data: UpdateMeDto, params: RequestParams = {}) =>
    this.http.request<UsersControllerUpdateMeData, any>({
      path: `/users/me`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
