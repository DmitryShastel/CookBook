import { useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { saveToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '@firebase-config';
import { ToastType } from '@/shared/reanimated/Toast';
import { useToast } from '@/shared/reanimated/ToastContext';

export const useSignUp = () => {
  const toast = useToast();
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
        'Welcome! Account created successfully',
        ToastType.Top,
        '#4CAF50',
      );
    } catch (error: any) {
      let errorMessage = 'Could not create account';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use';
          break;
        default:
          errorMessage = 'Could not create a new account';
      }
      toast.show(errorMessage, ToastType.Top, '#F44336');
      setIsLoading(false);
    }
  };
  return { signUp, isLoading };
};
