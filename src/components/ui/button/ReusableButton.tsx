import { Button } from 'react-native-elements';
import { ButtonInterface } from '@/components/ui/button/ReusableButton.types';
import { styles } from '@/components/ui/button/ReusableButton.styles';

export const ReusableButton = ({
  callback,
  title,
  accessibilityLabel,
  loading = false,
  style,
  textStyle,
  disabled = false,
}: ButtonInterface) => {
  const isDisabled = disabled || loading;

  return (
    <Button
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
