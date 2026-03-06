import { TextStyle, ViewStyle } from 'react-native';

export interface InputInterface {
  style?: ViewStyle;
  inputStyle?: TextStyle;
  accessibilityLabel: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
