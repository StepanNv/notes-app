import { useForm } from 'react-hook-form';
import type { SignInDto } from '../../../../api/generated/data-contracts';
import { useSignInMutation } from './useSignInMutation';
import { useAuthStore } from '../../../../stores/useAuthStore';
import type { AxiosError } from 'axios';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useNavigate } from 'react-router-dom';

type AuthErrorResponse = {
  code?: string;
  message?: string;
};

export const useSignInForm = () => {
  const { register, handleSubmit } = useForm<SignInDto>();
  const signInMutation = useSignInMutation();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setConfirmationEmail = useConfirmationEmailStore(
    (state) => state.setConfirmationEmail,
  );
  const setTrueEnteredPassword = useConfirmationEmailStore(
    (state) => state.setTrueEnteredPassword,
  );
  const navigate = useNavigate();

  const submit = handleSubmit((formData) => {
    signInMutation.mutate(formData, {
      onSuccess: (data) => {
        setAccessToken(data.data.accessToken);
      },
      onError: (error: AxiosError<AuthErrorResponse>) => {
        if (error.response?.data?.code === 'EMAIL_NOT_VERIFIED') {
          setConfirmationEmail(formData.email);
          setTrueEnteredPassword(formData.password);
          navigate('/sign-in/confirm-code');
        }
      },
    });
  });

  return {
    register,
    submit,
  };
};
