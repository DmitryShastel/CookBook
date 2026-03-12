import { create } from 'zustand';
import { persist } from 'zustand/middleware/persist';
import {
  InitialStateData,
  LoginResponseData,
} from '@/shared/stores/auth/loginStore/LoginInterface';

export const useSignInStore = create<InitialStateData>()(
  persist((set) => ({
    user: null,
    isLoggedIn: false,

    setUser: (userData: LoginResponseData) =>
      set({ user: userData, isLoggedIn: true }),
    signOut: () => set({ isLoggedIn: false, user: null }),
  })),
);
