import { authController } from '../../../api/auth-controller';

export const passwdReset = (email: string) =>
  authController.authControllerPasswordReset({ email });
