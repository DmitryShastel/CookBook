import { Button as RNButton } from 'react-native-elements';
import { styles } from '@/components/ui/button/Button.styles';
import { Props } from '@/components/ui/button/Button.types';

export const Button = ({
  onPress,
  title,
  isLoading = false,
  style,
  textStyle,
  disabled = false,
}: Props) => {
  const isDisabled = disabled || isLoading;

  return (
    <RNButton
      title={title}
      onPress={onPress}
      disabled={isDisabled}
      loading={isLoading}
      buttonStyle={[styles.button, style]}
      titleStyle={[styles.text, textStyle]}
      disabledStyle={styles.disabled}
      disabledTitleStyle={styles.disabledText}
      activeOpacity={0.7}
    />
  );
};
