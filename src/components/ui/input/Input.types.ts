import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface InputInterface {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  children: ReactNode;
  leftIcon?: ReactNode;
  errorMessage?: string;
  inputContainerStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  keyboardType?: StyleProp<TextStyle>;
  autoCapitalize?: string;
}
