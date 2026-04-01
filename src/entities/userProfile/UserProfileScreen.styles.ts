import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  infoCard: {
    backgroundColor: palette.neutral['0'],
    borderRadius: border.radius.lg,
    elevation: 3,
    margin: spacing.margin.md,
    marginTop: 0,
    padding: spacing.padding.md3,
    shadowColor: palette.neutral['1000'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.pressed,
    shadowRadius: border.radius.sm,
  },
  infoLabel: {
    color: palette.neutral['700'],
    fontSize: typography.accent.sm,
  },
  infoRow: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: spacing.padding.xxs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.padding.sm2,
  },
  infoTitle: {
    color: palette.neutral['800'],
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.md,
  },
  infoValue: {
    color: palette.neutral['800'],
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.medium,
  },
});
