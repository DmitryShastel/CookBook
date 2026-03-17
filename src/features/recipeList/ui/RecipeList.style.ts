import { StyleSheet } from 'react-native';
import { spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: spacing.margin.sn,
    width: '50%',
  },
  columnWrapper: {
    gap: 8,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding.sm,
  },
  emptyText: {
    color: '#999',
    fontSize: typography.accent.md,
    marginTop: spacing.margin.xxxl,
    textAlign: 'center',
  },
  list: {
    paddingVertical: spacing.padding.sn,
  },
  loader: {
    marginTop: spacing.margin.xxxl,
  },
});
