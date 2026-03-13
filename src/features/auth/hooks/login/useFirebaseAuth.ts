import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../../../../firebase-config';
import { User } from 'firebase/auth';

export const useFirebaseLogin = () => {
  const { setUser, setIsLoading } = useSignInStore();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user: User) => {
      setUser(user);
    });
    return unsubscribe;
  }, [setUser]);
};
