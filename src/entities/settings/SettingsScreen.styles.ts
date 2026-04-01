import { StyleSheet } from 'react-native';
import { palette, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: spacing.padding.xl4,
  },
  version: {
    color: palette.neutral['500'],
    fontSize: typography.accent.sm,
  },
});
