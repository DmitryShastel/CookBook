import { TextStyle, ViewStyle } from 'react-native';

export interface Props {
  onPress: () => void;
  title: string;
  accessibilityLabel?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  color?: string;
  isLoading?: boolean;
}
