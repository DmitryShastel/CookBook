import { ReactNode } from 'react';
import { RootStackParamList } from '@/navigation/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src';

export interface RootScreenProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  activeTab?: 'home' | 'settings' | 'profile';
  onTabPress?: (tab: 'home' | 'settings' | 'profile') => void;
  hideTabs?: boolean;
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
