import { useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { saveToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '@firebase-config';
import { useToast } from '@/shared/reanimated/ToastContext';
import { useTranslation } from 'react-i18next';
import { palette } from '@/shared/styles/CommonStyles';
import { ToastType } from '@/components/toast/Toast.types';

export const useSignUp = () => {
  const toast = useToast();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useSignInStore((state) => state.setUser);

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const idToken = await user.getIdToken();
      await saveToken(idToken);

      setUser({
        uid: user.uid,
        email: user.email,
        token: idToken,
      });
      toast.show(
        t('Welcome! Account created successfully'),
        ToastType.Top,
        palette.success,
      );
    } catch (error: any) {
      let errorMessage = '';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = t('SignUp.emailAlreadyInUse');
          break;
        default:
          errorMessage = t('SignUp.default');
      }
      toast.show(errorMessage, ToastType.Top, palette.error);
      setIsLoading(false);
    }
  };
  return { signUp, isLoading };
};
