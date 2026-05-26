import { Auth } from './generated/Auth';
import { httpClient } from './http-client';

export const authController = new Auth(httpClient);