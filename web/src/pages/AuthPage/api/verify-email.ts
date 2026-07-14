import { authController } from '../../../api/auth-controller';

export const verifyEmail = (
  confirmationEmail: string,
  confirmationCode: string,
) =>
  authController.emailConfirmationControllerNewVerification(
    {
      email: confirmationEmail,
      confirmationCode: confirmationCode,
    },
    {},
  );
