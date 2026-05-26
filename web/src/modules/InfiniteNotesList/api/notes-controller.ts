import { Notes } from '../../../api/generated/Notes';
import { httpClient } from '../../../api/http-client';

export const notesController = new Notes(httpClient);
