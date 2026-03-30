import { StyleSheet } from 'react-native';
import {
  spacing,
  palette,
  border,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.margin.md,
  },

  errorText: {
    color: palette.error,
    fontSize: typography.accent.sm,
    marginTop: spacing.margin.xxs,
  },

  input: {
    color: palette.neutral[900],
    flex: 1,
    fontSize: typography.accent.md,
    paddingVertical: spacing.padding.xs,
  },

  inputContainer: {
    alignItems: 'center',
    borderColor: palette.neutral[300],
    borderRadius: border.radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: spacing.padding.sm,
    paddingVertical: spacing.padding.xs,
  },
});
