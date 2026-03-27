import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { deleteToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '@firebase-config';
import { useToast } from '@/shared/reanimated/ToastContext';
import { ToastType } from '@/shared/reanimated/Toast';

export const useSignOut = () => {
  const toast = useToast();
  const signOut = useSignInStore((state) => state.signOut);

  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
      await deleteToken();
      signOut();
      toast.show('Goodbye! You have been logged out', ToastType.Top, '#2196F3');
    } catch (error) {
      toast.show('Error! Could not log out', ToastType.Top, '#F44336');
    }
  };

  return { handleLogout };
};
