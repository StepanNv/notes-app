import { Auth } from '../../../api/generated/Auth';
import { httpClient } from '../../../api/http-client';

export const authController = new Auth(httpClient);
