import { create } from 'zustand';
import {
  InitialStateData,
  LoginResponseData,
} from '@/shared/stores/auth/LoginInterface';

export const useSignInStore = create<InitialStateData>()((set) => ({
  user: null,
  isLoading: true,

  setUser: (userData: LoginResponseData) =>
    set({ user: userData, isLoading: false }),
  signOut: () => set({ user: null, isLoading: false }),
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
}));
