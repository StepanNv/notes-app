import { authController } from '../../../api/auth-controller';

export const confirmEmail = (
  confirmationEmail: string,
  confirmationCode: string,
) =>
  authController.emailConfirmationControllerNewVerification(
    {
      confirmationEmail: confirmationEmail,
      confirmationCode: confirmationCode,
    },
    {},
  );
