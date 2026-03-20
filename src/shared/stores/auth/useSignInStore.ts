import { create } from 'zustand';
import {
  InitialStateData,
  LoginResponseData,
} from '@/shared/stores/auth/LoginInterface';
import { getToken } from '@/shared/stores/secureStore/SecureStore';
import { auth } from '../../../../firebase-config';

export const useSignInStore = create<InitialStateData>()((set) => ({
  user: null,
  isLoading: true,

  setAuthMe: async () => {
    const token = await getToken();
    if (!token) {
      return set({ user: null, isLoading: false });
    }

    const user = auth.currentUser;

    if (user) {
      return set({
        user: {
          uid: user.uid,
          email: user.email,
          token,
        },
        isLoading: false,
      });
    }
    set({ user: null, isLoading: true });
  },
  setUser: (userData: LoginResponseData) =>
    set({ user: userData, isLoading: false }),
  signOut: () => set({ user: null, isLoading: false }),
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
}));
