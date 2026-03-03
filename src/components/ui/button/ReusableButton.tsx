import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { ButtonInterface } from '@/components/ui/button/ReusableButton.types';
import { styles } from '@/components/ui/button/ReusableButton.styles';

export const ReusableButton = ({
  callback,
  title,
  accessibilityLabel,
  color = '#007AFF',
  loading = false,
  style,
  textStyle,
  disabled = false,
}: ButtonInterface) => {
  const isDisabled = disabled || loading;

  const buttonColorStyle = {
    backgroundColor: isDisabled ? '#CCCCCC' : color,
  };

  return (
    <TouchableOpacity
      onPress={callback}
      accessibilityLabel={accessibilityLabel}
      disabled={isDisabled}
      style={[styles.button, buttonColorStyle, style]}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={isDisabled ? '#666666' : '#FFFFFF'}
          size="small"
        />
      ) : (
        <Text
          style={[styles.text, textStyle, isDisabled && styles.disabledText]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
