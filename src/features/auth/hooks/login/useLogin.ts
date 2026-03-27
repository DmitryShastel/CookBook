import { signInWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { saveToken } from '@/shared/stores/secureStore/SecureStore';
import { ErrorCode } from '@/constants/Errors';
import { auth } from '@firebase-config';
import { useToast } from '@/shared/reanimated/ToastContext';
import { ToastType } from '@/shared/reanimated/Toast';

export const useLogin = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useSignInStore((state) => state.setUser);

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await user.getIdToken();
      await saveToken(idToken);
      setUser({
        uid: user.uid,
        email: user.email,
        token: idToken,
      });
      toast.show(
        'Welcome Back! You have successfully logged in',
        ToastType.Top,
        '#4CAF50',
      );
    } catch (error: any) {
      let errorMessage = '';

      switch (error.code) {
        case ErrorCode.invalidCredential:
          errorMessage = 'Invalid email or password';
          break;
        case ErrorCode.toManyRequest:
          errorMessage = 'Too many attempts. Try again later';
          break;
        case ErrorCode.networkRequestFailed:
          errorMessage = 'Network error. Check your connection';
          break;
        default:
          errorMessage = 'Could not log in. Please try again';
      }
      toast.show(errorMessage, ToastType.Top, '#F44336');
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
