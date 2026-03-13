import { useSignInStore } from '@/shared/stores/auth/loginStore/useSignInStore';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../../../../firebase-config';

export const useFirebaseLogin = () => {
  const { setUser } = useSignInStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [setUser]);
};
