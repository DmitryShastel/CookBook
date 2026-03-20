export interface UserMetaData {
  createdAt: string;
  creationTime: string;
  lastLoginAt: string;
  lastSignInTime: string;
}

export interface LoginResponseData {
  token: string;
  uid: string;
  accessToken?: string;
  displayName?: string | null;
  email: string;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  photoURL?: string | null;
  metadata?: UserMetaData;
}

export interface InitialStateData {
  isLoading: boolean;
  user: LoginResponseData | null;
  signOut: () => void;
  setUser: (userData: LoginResponseData) => void;
}
