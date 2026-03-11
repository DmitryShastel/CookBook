import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAKWJIPCPISN9ETEEl7kfqGnQeP_QXZQmc',
  authDomain: 'fir-progect-60fe1.firebaseapp.com',
  projectId: 'fir-progect-60fe1',
  storageBucket: 'fir-progect-60fe1.firebasestorage.app',
  messagingSenderId: '1019750165503',
  appId: '1:1019750165503:web:852e80d14646f83dd4d5ca',
  measurementId: 'G-V6ZCPWE65V',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
