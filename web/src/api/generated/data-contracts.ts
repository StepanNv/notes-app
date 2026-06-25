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

export interface GetMeResDto {
  email: string;
  username: string;
  /** @format date-time */
  createdAt: string;
}

export interface SignUpDto {
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

export interface AuthResDto {
  accessToken: string;
}

export interface SignInDto {
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

export interface AddNoteResDto {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateStatusDto {
  currentStatus: "default" | "archived" | "trashed";
  selectedStatus: "default" | "archived" | "trashed";
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

export interface UpdateNotesColorResDto {
  updatedNotesData: {
    noteId: string;
    /** @format date-time */
    updatedAt: string;
  }[];
}

export interface UpdateNoteContentDto {
  noteId: string;
  /** @maxLength 200 */
  updatedTitle: string;
  /** @maxLength 10000 */
  updatedText: string;
}

export interface UpdateNoteContentResDto {
  /** @format date-time */
  updatedAt: string;
}

export interface UpdateNotePositionDto {
  noteId: string;
  updatedPositionNumber: number;
}

export interface NoteDto {
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
  id: string;
  title: string | null;
  text: string | null;
  positionNumber: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  authorId: string;
}

export interface GetNotesResDto {
  notes: NoteDto[];
  next_last_id: string | null;
}

export interface GetNoteResDto {
  note: NoteDto;
}

export type UsersControllerGetMeData = GetMeResDto;

export type AuthControllerSignUpData = AuthResDto;

export type AuthControllerSignInData = AuthResDto;

export type AuthControllerSignOutData = any;

export type AuthControllerRefreshData = AuthResDto;

export type NotesControllerAddData = AddNoteResDto;

export type NotesControllerDeleteNotesData = any;

export interface NotesControllerGetManyParams {
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

export type NotesControllerGetManyData = GetNotesResDto;

export type NotesControllerUpdateStatusData = any;

export type NotesControllerUpdateColorData = UpdateNotesColorResDto;

export type NotesControllerUpdateContentData = UpdateNoteContentResDto;

export type NotesControllerUpdatePositionData = any;

export interface NotesControllerGetOneParams {
  id: string;
}

export type NotesControllerGetOneData = GetNoteResDto;
