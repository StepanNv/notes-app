import { usersController } from '../../../../api/users-controller';

export const getUserName = async () => {
  const res = await usersController.usersControllerGetMe();
  return res.data.username;
};
