import { JwtPayload } from 'jsonwebtoken';
import type { User } from '../../../prisma/generated/client';

export type TTokensPayload = JwtPayload & {
  userId: User['id'];
};
