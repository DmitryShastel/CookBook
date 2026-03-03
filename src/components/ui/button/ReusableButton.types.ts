import { TextStyle, ViewStyle } from 'react-native/types_generated';

export interface ButtonInterface {
  callback: () => void;
  title: string;
  accessibilityLabel: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
}
