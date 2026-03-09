import { ReactNode } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/type';

export interface RootScreenProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  onTabPress?: (tab: 'home' | 'settings' | 'profile') => void;
  hideTabs?: boolean;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
