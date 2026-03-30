import { TextStyle, ViewStyle } from 'react-native';

export interface ButtonInterface {
  onPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
  title: string;
  accessibilityLabel?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle | ViewStyle[];
  buttonStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  disabledStyle?: ViewStyle | ViewStyle[];
  disabledTextStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  disabled?: boolean;
  color?: string;
  isLoading?: boolean;
}
