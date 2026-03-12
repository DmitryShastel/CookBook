import { create } from 'zustand';
import {
  InitialStateData,
  LoginResponseData,
} from '@/shared/stores/auth/loginStore/LoginInterface';

export const useSignInStore = create<InitialStateData>()((set) => ({
  user: null,
  isLoggedIn: false,

  setUser: (userData: LoginResponseData) =>
    set({ user: userData, isLoggedIn: true }),
  signOut: () => set({ user: null, isLoggedIn: false }),
}));
