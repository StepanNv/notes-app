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

export interface RegisterDto {
  /** @format email */
  email: string;
  /** @maxLength 30 */
  username: string;
  /**
   * @minLength 6
   * @maxLength 50
   */
  password: string;
}

export interface AuthDto {
  accessJwt: string;
}

export interface LoginDto {
  /** @format email */
  email: string;
  password: string;
}

export interface AddNoteDto {
  /** @maxLength 200 */
  title: string;
  /** @maxLength 10000 */
  text: string;
}

export interface AddNoteResponseDto {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface ArchiveNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface UnarchiveNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface TrashNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
  currentStatus: "default" | "archived";
}

export interface RestoreTrashedNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface DeleteNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface UpdateNotesColorDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
  updatedColorKey:
    | "FIRST"
    | "SECOND"
    | "THIRD"
    | "FOURTH"
    | "FIFTH"
    | "SIXTH"
    | "SEVENTH"
    | "EIGHTH"
    | "NINTH"
    | "TENTH"
    | "ELEVENTH"
    | "TWELVEFTH";
}

export interface UpdatedNoteColorDto {
  noteId: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateNotesColorResponseDto {
  updatedNotesData: UpdatedNoteColorDto[];
}

export interface UpdateNoteContentDto {
  noteId: string;
  /** @maxLength 200 */
  updatedTitle: string;
  /** @maxLength 10000 */
  updatedText: string;
}

export interface UpdateNoteContentResponseDto {
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateNotePositionDto {
  noteId: string;
  updatedPositionNumber: number;
}

export interface NoteDto {
  id: string;
  title: string | null;
  text: string | null;
  colorKey:
    | "FIRST"
    | "SECOND"
    | "THIRD"
    | "FOURTH"
    | "FIFTH"
    | "SIXTH"
    | "SEVENTH"
    | "EIGHTH"
    | "NINTH"
    | "TENTH"
    | "ELEVENTH"
    | "TWELVEFTH";
  status: "default" | "archived" | "trashed";
  positionNumber: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  authorId: string;
}

export interface GetNotesMetaDto {
  next_last_id: string | null;
}

export interface GetNotesResponseDto {
  data: NoteDto[];
  meta: GetNotesMetaDto;
}

export type AuthControllerRegisterData = AuthDto;

export type AuthControllerLoginData = AuthDto;

export type AuthControllerLogoutData = any;

export type AuthControllerRefreshData = AuthDto;

export type NotesControllerAddNoteData = AddNoteResponseDto;

export type NotesControllerArchiveNotesData = any;

export type NotesControllerUnarchiveNotesData = any;

export type NotesControllerTrashNotesData = any;

export type NotesControllerRestoreTrashedNotesData = any;

export type NotesControllerDeleteNotesData = any;

export type NotesControllerUpdateNotesColorData = UpdateNotesColorResponseDto;

export type NotesControllerUpdateNoteContentData = UpdateNoteContentResponseDto;

export type NotesControllerUpdateNotePositionData = any;

export interface NotesControllerGetNotesParams {
  status: "default" | "archived" | "trashed";
  /** @default "custom" */
  sort?: "custom" | "created_at" | "updated_at";
  search?: string;
  /**
   * @min 1
   * @max 50
   * @default 20
   */
  limit?: number;
  /** @format uuid */
  last_id?: string;
}

export type NotesControllerGetNotesData = GetNotesResponseDto;
