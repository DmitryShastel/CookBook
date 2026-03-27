import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { deleteToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '@firebase-config';
import { useToast } from '@/app/reanimated/ToastContext';
import { useTranslation } from 'react-i18next';
import { palette } from '@/shared/styles/CommonStyles';
import { ToastType } from '@/components/ui/toast/Toast.types';

export const useSignOut = () => {
  const toast = useToast();
  const { t } = useTranslation();
  const signOut = useSignInStore((state) => state.signOut);

  const handleLogout = async () => {
    try {
      await firebaseSignOut(auth);
      await deleteToken();
      signOut();
      toast.show(t('SignOut.signOutSuccess'), ToastType.Top, palette.info);
    } catch (error) {
      toast.show(t('SignOut.error'), ToastType.Top, palette.error);
    }
  };

  return { handleLogout };
};
