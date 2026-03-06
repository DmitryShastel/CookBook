import { TextStyle, ViewStyle } from 'react-native';

export interface Props {
  callback: () => void;
  title: string;
  accessibilityLabel: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
}
