import { useForm } from 'react-hook-form';
import type { SignInDto } from '../../../../api/generated/data-contracts';
import { useSignInMutation } from './useSignInMutation';
import { useAuthStore } from '../../../../stores/useAuthStore';
import type { AxiosError } from 'axios';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useNavigate } from 'react-router-dom';
import { useGetMyProfile } from '../../../../hooks/useGetMyProfile';
import { useAppSettingsStore } from '../../../../stores/useAppSettingsStore';

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
  const setClientLanguage = useAppSettingsStore((state) => state.setLanguage);
  const toggleClientTheme = useAppSettingsStore((state) => state.toggleTheme);
  const themeFromClient = useAppSettingsStore((state) => state.theme);

  const submit = handleSubmit((formData) => {
    signInMutation.mutate(formData, {
      onSuccess: (data) => {
        setAccessToken(data.data.accessToken);
        const getMyProfile = useGetMyProfile();
        const languageFromServer = getMyProfile.data?.data.language;
        const themeFromServer = getMyProfile.data?.data.theme;
        if (languageFromServer) setClientLanguage(languageFromServer);
        if (themeFromServer) {
          if (themeFromServer !== themeFromClient) toggleClientTheme();
        }
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
