export class UpdateNotesColorResDto {
  readonly updatedNotesData: {
    readonly noteId: string;
    readonly updatedAt: Date;
  }[];
}
