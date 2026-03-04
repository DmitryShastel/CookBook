import { LoginFormData } from '@/features/auth/model/lib/LoginValidation';

export interface LoginFormProps {
  onSubmit?: (values: LoginFormData) => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}
