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
  AddNoteDto,
  DeleteNotesDto,
  NotesControllerAddData,
  NotesControllerDeleteNotesData,
  NotesControllerGetManyData,
  NotesControllerGetManyParams,
  NotesControllerGetOneData,
  NotesControllerGetOneParams,
  NotesControllerUpdateColorData,
  NotesControllerUpdateContentData,
  NotesControllerUpdatePositionData,
  NotesControllerUpdateStatusData,
  UpdateNoteContentDto,
  UpdateNotePositionDto,
  UpdateNotesColorDto,
  UpdateStatusDto,
} from "./data-contracts";
import { ContentType, HttpClient, type RequestParams } from "./http-client";

export class Notes<SecurityDataType = unknown> {
  static readonly paths = {
    notesControllerAdd: "/notes",
    notesControllerDeleteNotes: "/notes",
    notesControllerGetMany: "/notes",
    notesControllerUpdateStatus: "/notes/status",
    notesControllerUpdateColor: "/notes/color",
    notesControllerUpdateContent: "/notes/content",
    notesControllerUpdatePosition: "/notes/position",
    notesControllerGetOne: "/notes/${id}",
  } as const;

  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerAdd
   * @summary Добавить заметку
   * @request POST:/notes
   * @secure
   * @response `201` `NotesControllerAddData`
   */
  notesControllerAdd = (data: AddNoteDto, params: RequestParams = {}) =>
    this.http.request<NotesControllerAddData, any>({
      path: `/notes`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerDeleteNotes
   * @summary Удалить заметки
   * @request DELETE:/notes
   * @secure
   * @response `200` `NotesControllerDeleteNotesData`
   */
  notesControllerDeleteNotes = (
    data: DeleteNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerDeleteNotesData, any>({
      path: `/notes`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerGetMany
   * @summary Получить заметки
   * @request GET:/notes
   * @secure
   * @response `200` `NotesControllerGetManyData`
   */
  notesControllerGetMany = (
    params: RequestParams = {},
    query: NotesControllerGetManyParams,
  ) =>
    this.http.request<NotesControllerGetManyData, any>({
      path: `/notes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateStatus
   * @summary Обновить статус заметок
   * @request PATCH:/notes/status
   * @secure
   * @response `200` `NotesControllerUpdateStatusData`
   */
  notesControllerUpdateStatus = (
    data: UpdateStatusDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateStatusData, any>({
      path: `/notes/status`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateColor
   * @summary Обновить цвет заметок
   * @request PATCH:/notes/color
   * @secure
   * @response `200` `NotesControllerUpdateColorData`
   */
  notesControllerUpdateColor = (
    data: UpdateNotesColorDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateColorData, any>({
      path: `/notes/color`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateContent
   * @summary Обновить контент заметки (заголовок, текст)
   * @request PATCH:/notes/content
   * @secure
   * @response `200` `NotesControllerUpdateContentData`
   */
  notesControllerUpdateContent = (
    data: UpdateNoteContentDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateContentData, any>({
      path: `/notes/content`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdatePosition
   * @summary Обновить позицию заметки
   * @request PATCH:/notes/position
   * @secure
   * @response `200` `NotesControllerUpdatePositionData`
   */
  notesControllerUpdatePosition = (
    data: UpdateNotePositionDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdatePositionData, any>({
      path: `/notes/position`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerGetOne
   * @summary Получить заметку
   * @request GET:/notes/{id}
   * @secure
   * @response `200` `NotesControllerGetOneData`
   */
  notesControllerGetOne = (
    params: RequestParams = {},
    { id }: NotesControllerGetOneParams,
  ) =>
    this.http.request<NotesControllerGetOneData, any>({
      path: `/notes/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
