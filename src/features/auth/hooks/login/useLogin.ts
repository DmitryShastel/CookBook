import { signInWithEmailAndPassword } from '@firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { useState } from 'react';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { saveToken } from '@/shared/stores/secureStore/SecureStore';
import { ErrorCode } from '@/constants/Errors';
import { auth } from '@firebase-config';

export const useLogin = () => {
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
      showMessage({
        message: 'Welcome Back!',
        description: 'You have successfully logged in',
        type: 'success',
        duration: 3000,
      });
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
      showMessage({
        message: 'Login Failed',
        description: errorMessage,
        type: 'danger',
        duration: 3000,
      });
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
