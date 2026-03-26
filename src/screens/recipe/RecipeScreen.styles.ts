import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  category: {
    color: palette.neutral['600'],
    fontSize: typography.accent.md,
    marginBottom: spacing.margin.mdd,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.padding.mdd,
  },
  container: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  content: {
    borderRadius: border.radius.lg,
    height: '100%',
  },
  ingredientAmount: {
    color: palette.neutral['600'],
    fontSize: typography.accent.md,
    textAlign: 'right',
  },
  ingredientItem: {
    borderBottomColor: '#e1e4e8',
    borderBottomWidth: spacing.padding.xxs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.padding.sm,
  },
  ingredientName: {
    color: palette.neutral['1000'],
    flex: 1,
    fontSize: typography.accent.md,
  },
  ingredientsContainer: {
    backgroundColor: palette.neutral['0'],
    borderRadius: border.radius.lg,
    marginBottom: spacing.margin.lg,
    padding: spacing.padding.md,
  },
  instructions: {
    color: palette.neutral['600'],
    fontSize: typography.accent.md,
    lineHeight: 24,
    marginBottom: spacing.margin.lg,
  },
  linkButton: {
    alignItems: 'center',
    backgroundColor: palette.neutral['0'],
    borderRadius: border.radius.md,
    flexDirection: 'row',
    gap: 8,
    padding: spacing.padding.md,
  },
  linkText: {
    color: palette.info,
    fontSize: typography.accent.md,
    fontWeight: typography.weight.medium,
  },
  linksContainer: {
    gap: 12,
    marginBottom: spacing.margin.xl,
    marginTop: spacing.margin.md,
  },
  notFoundContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.padding.mdd,
  },
  notFoundText: {
    color: palette.error,
    fontSize: typography.accent.lg,
    textAlign: 'center',
  },
  recipeImage: {
    minHeight: 300,
    resizeMode: 'cover',
    width: '100%',
  },
  sectionTitle: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xl,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.sn,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    marginTop: spacing.margin.xs,
  },
  statValue: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xl,
    fontWeight: typography.weight.semiBold,
  },
  statsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: border.radius.lg,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.margin.lg,
    padding: spacing.padding.md,
  },
  title: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xll,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.sm,
  },
  youtubeButton: {
    backgroundColor: '#fff0f0',
  },
  youtubeText: {
    color: palette.error,
  },
});
