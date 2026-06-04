import { usersController } from '../../../api/users-controller';

export const getUsername = async () => {
  const res = await usersController.usersControllerGetMe();
  return res.data.username;
};
