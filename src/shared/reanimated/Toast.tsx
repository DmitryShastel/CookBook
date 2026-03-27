import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export enum ToastType {
  Top,
}

interface Props {
  showToast: boolean;
  message?: string;
  type?: ToastType;
  color: string;
}

export const Toast = ({
  showToast,
  message,
  type = ToastType.Top,
  color = '',
}: Props) => {
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

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commonToastStyle: {
    borderRadius: 8,
    elevation: 4,
    height: 72,
    left: 0,
    margin: 8,
    padding: 16,
    position: 'absolute',
    right: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 100,
  },
  topToastStyle: {
    top: 0,
  },
});
