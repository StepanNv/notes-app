import { Users } from './generated/Users';
import { httpClient } from './http-client';

export const usersController = new Users(httpClient);