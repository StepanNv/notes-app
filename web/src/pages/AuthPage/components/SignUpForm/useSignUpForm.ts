import { useForm } from 'react-hook-form';
import type { SignUpDto } from '../../../../api/generated/data-contracts';
import { useSignUpMutation } from './useSignUpMutation';
import { useConfirmationEmailStore } from '../../stores/useConfirmationEmailStore';
import { useNavigate } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { useErrorsStore } from '../../../../modules/ErrorAlertsBox';

export const useSignUpForm = () => {
  const { register, handleSubmit } = useForm<SignUpDto>();
  const signUpMutation = useSignUpMutation();
  const setConfirmationEmail = useConfirmationEmailStore(
    (state) => state.setConfirmationEmail,
  );
  const navigate = useNavigate();
  const addError = useErrorsStore((state) => state.addError);

  const submit = handleSubmit((formData) => {
    signUpMutation.mutate(formData, {
      onSuccess: () => {
        setConfirmationEmail(formData.email);
        navigate('/sign-in/confirm-code');
      },
      onError: (error: AxiosError<{ code: string, message: string }>) => {
        const message = error.response?.data?.message;
        if (error.response?.data?.code === 'EMAIL_NOT_VERIFIED') {
          addError(error.response?.data?.message);
          setConfirmationEmail(formData.email);
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
