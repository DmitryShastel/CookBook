import { SignUpFormData } from '@/features/auth/model/lib/SignUpValidation';

export interface SignUpFormProps {
  onSubmit?: (values: SignUpFormData) => void;
}
