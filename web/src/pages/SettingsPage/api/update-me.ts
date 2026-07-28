import { usersController } from '../../../api/users-controller';
import type { UpdateMeDto } from '../../../api/generated/data-contracts';

export const updateMe = (data: UpdateMeDto) =>
  usersController.usersControllerUpdateMe(data);
