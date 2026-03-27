import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { styles } from '@/components/ui/toast/Toast.styles';
import { ToastInterface, ToastType } from '@/components/ui/toast/Toast.types';

export const Toast = ({
  showToast,
  message,
  type = ToastType.Top,
  color = '',
}: ToastInterface) => {
  const positionY = useSharedValue(type === ToastType.Top ? -100 : 100);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
  }));

  useEffect(() => {
    if (showToast) {
      positionY.value = withSpring(type === ToastType.Top ? 0 : -16);
    } else {
      positionY.value = withSpring(type === ToastType.Top ? -100 : 100);
    }
  }, [showToast, type]);

  return (
    <Animated.View
      style={[
        styles.commonToastStyle,
        { backgroundColor: color },
        type === ToastType.Top ? styles.topToastStyle : styles.bottomToastStyle,
        animatedStyle,
      ]}
    >
      <Text>{message}</Text>
    </Animated.View>
  );
};
