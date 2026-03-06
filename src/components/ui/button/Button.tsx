import { Button as RNButton } from 'react-native-elements';
import { styles } from '@/components/ui/button/Button.styles';
import { Props } from '@/components/ui/button/Button.types';

export const Button = ({
  callback,
  title,
  accessibilityLabel,
  loading = false,
  style,
  textStyle,
  disabled = false,
}: Props) => {
  const isDisabled = disabled || loading;

  return (
    <RNButton
      title={title}
      onPress={callback}
      disabled={isDisabled}
      loading={loading}
      buttonStyle={[styles.button, style]}
      titleStyle={[styles.text, textStyle]}
      disabledStyle={styles.disabled}
      disabledTitleStyle={styles.disabledText}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.7}
    />
  );
};
