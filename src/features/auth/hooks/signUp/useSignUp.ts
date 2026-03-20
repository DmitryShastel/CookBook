import { useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../../../../firebase-config';
import { showMessage } from 'react-native-flash-message';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { saveToken } from '@/shared/stores/secureStore/SecureStore';

export const useSignUp = () => {
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

      showMessage({
        message: 'Welcome!',
        description: 'Account created successfully',
        type: 'success',
      });
    } catch (error: any) {
      let errorMessage = 'Could not create account';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use';
          break;
        default:
          errorMessage = 'Could not create a new account';
      }
      showMessage({
        message: 'Sign Up Failed',
        description: errorMessage,
        type: 'danger',
      });
      setIsLoading(false);
    }
  };

  return { signUp, isLoading };
};
