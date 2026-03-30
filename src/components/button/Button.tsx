import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { styles } from './Button.styles';
import { ButtonInterface } from '@/components/button/Button.types';
import { palette } from '@/shared/styles/CommonStyles';

export const Button = ({
  onPress,
  onPressIn,
  onPressOut,
  title,
  containerStyle,
  buttonStyle,
  textStyle,
  disabled = false,
  isLoading = false,
  disabledStyle,
  disabledTextStyle,
}: ButtonInterface) => {
  const isDisabled = disabled || isLoading;

  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={isDisabled}
        style={[
          styles.button,
          buttonStyle,
          isDisabled && styles.disabled,
          isDisabled && disabledStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={palette.neutral[0]} />
        ) : (
          <Text
            style={[
              styles.text,
              textStyle,
              isDisabled && styles.disabledText,
              isDisabled && disabledTextStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
