import type { NoteDto } from '../api/generated/data-contracts';

export const NOTE_COLORS = {
  FIRST: 'transparent',
  SECOND: 'rgba(182, 63, 69, 1)',
  THIRD: 'rgba(215, 133, 75, 1)',
  FOURTH: 'rgba(193, 142, 48, 1)',
  FIFTH: 'rgb(36, 87, 53)',
  SIXTH: 'rgba(72, 156, 122, 1)',
  SEVENTH: 'rgba(118, 154, 183, 1)',
  EIGHTH: 'rgb(46, 77, 102)',
  NINTH: 'rgb(110, 65, 100)',
  TENTH: 'rgba(184, 121, 142, 1)',
  ELEVENTH: 'rgba(145, 121, 85, 1)',
  TWELFTH: 'rgba(80, 79, 79, 1)',
} as const satisfies Record<NoteDto['colorKey'], string>;

export type NoteColorKey = keyof typeof NOTE_COLORS;
