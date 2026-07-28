import { authController } from '../../../api/auth-controller';
import type { SignUpDto } from '../../../api/generated/data-contracts';

export const signUp = (formData: SignUpDto) =>
  authController.authControllerSignUp(formData);
