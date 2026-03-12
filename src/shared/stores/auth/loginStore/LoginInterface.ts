export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponseData {}

export interface InitialStateData {
  isLoggedIn: boolean;
  user: LoginResponseData | null;
  signOut: () => void;
  setUser: (userData: LoginResponseData) => void;
}
