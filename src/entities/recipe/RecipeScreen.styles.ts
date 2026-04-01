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
    marginBottom: spacing.margin.md3,
  },
  centerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.padding.md3,
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
    borderBottomColor: palette.neutral['300'],
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
    padding: spacing.padding.md3,
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
    marginBottom: spacing.margin.sm3,
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
    backgroundColor: palette.neutral['0'],
    borderRadius: border.radius.lg,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.margin.lg,
    padding: spacing.padding.md,
  },
  title: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xxxl3,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.sm,
  },
  youtubeButton: {
    backgroundColor: palette.neutral['0'],
  },
  youtubeText: {
    color: palette.error,
  },
});
