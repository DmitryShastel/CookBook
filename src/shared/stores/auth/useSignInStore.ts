import { create } from 'zustand';
import {
  InitialStateData,
  LoginResponseData,
} from '@/shared/stores/auth/LoginInterface';
import { getToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '@firebase-config';
import { onAuthStateChanged } from '@firebase/auth';

export const useSignInStore = create<InitialStateData>()((set) => ({
  user: null,
  isLoading: true,

  initAuth: async () => {
    const token = await getToken();
    if (!token) {
      return set({ user: null, isLoading: false });
    }

    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        set({
          user: {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            token,
          },
          isLoading: false,
        });
      } else {
        set({ user: null, isLoading: false });
      }
    });
  },
  setUser: (userData: LoginResponseData) =>
    set({ user: userData, isLoading: false }),
  signOut: () => set({ user: null, isLoading: false }),
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
}));
