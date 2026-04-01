import { StyleSheet } from 'react-native';
import { palette, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: spacing.margin.sm3,
    width: '50%',
  },
  columnWrapper: {
    gap: 8,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding.sm,
  },
  emptyText: {
    color: palette.neutral['500'],
    fontSize: typography.accent.md,
    marginTop: spacing.margin.xxxl,
    textAlign: 'center',
  },
  list: {
    paddingVertical: spacing.padding.sm2,
  },
  loader: {
    marginTop: spacing.margin.xxxl,
  },
});
