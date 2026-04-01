import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: palette.primary.main,
    borderRadius: border.radius.md,
    justifyContent: 'center',
    paddingHorizontal: spacing.padding.md,
    paddingVertical: spacing.padding.sm2,
  },
  disabled: {
    backgroundColor: palette.neutral['400'],
  },
  disabledText: {
    color: palette.neutral['0'],
  },
  text: {
    color: palette.neutral['0'],
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
});
