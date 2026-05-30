import { Notes } from './generated/Notes';
import { httpClient } from './http-client';

export const notesController = new Notes(httpClient);
