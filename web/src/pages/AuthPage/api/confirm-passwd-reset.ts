import { authController } from '../../../api/auth-controller';

export const confirmPasswdReset = (email: string, newPassword: string, confirmationCode: string) =>
  authController.emailConfirmationControllerNewPasswordReset({
    email,
    newPassword: newPassword,
    confirmationCode: confirmationCode,
  });
