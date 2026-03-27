import { StyleSheet } from 'react-native';
import { border, opacity, spacing } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  commonToastStyle: {
    borderRadius: border.radius.md,
    elevation: 4,
    left: 0,
    margin: spacing.margin.sm,
    minHeight: 72,
    padding: spacing.padding.md,
    position: 'absolute',
    right: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: opacity.disabled,
    shadowRadius: border.radius.md,
    zIndex: 100,
  },
  topToastStyle: {
    top: 0,
  },
});
