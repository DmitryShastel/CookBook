import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export function useAnimatedButton({ pressScale = 0.95, duration = 150 } = {}) {
  const scale = useSharedValue(1);

  const onPressIn = () => {
    scale.value = withTiming(pressScale, { duration });
  };

  const onPressOut = () => {
    scale.value = withTiming(1, { duration });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return {
    animatedStyle,
    onPressIn,
    onPressOut,
  };
}
