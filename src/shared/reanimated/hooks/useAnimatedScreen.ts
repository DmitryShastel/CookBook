import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/core';

export const useAnimatedScreen = () => {
  const progress = useSharedValue(0);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      progress.value = withTiming(1, { duration: 500 });
    } else {
      progress.value = 0;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: interpolate(progress.value, [0, 1], [40, 0]) }],
  }));

  const animatedOut = () => {
    progress.value = withTiming(0, { duration: 500 });
  };
  return { animatedStyle, animatedOut };
};
