import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { auth } from '../../../../../firebase-config';

export const useSignOut = () => {
  const signOut = useSignInStore((state) => state.signOut);

  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
      signOut();

      showMessage({
        message: 'Goodbye!',
        description: 'You have been logged out',
        type: 'info',
        duration: 3000,
      });
    } catch (error) {
      showMessage({
        message: 'Error',
        description: 'Could not log out',
        type: 'danger',
        duration: 3000,
      });
    }
  };

  return { handleLogout };
};
