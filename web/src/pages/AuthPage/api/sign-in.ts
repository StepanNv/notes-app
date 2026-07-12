import { authController } from '../../../api/auth-controller';

export const signIn = (email: string, password: string) =>
  authController.authControllerSignIn({ email, password });
