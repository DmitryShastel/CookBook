import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: border.radius.xl,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: spacing.margin.md,
    marginVertical: spacing.margin.sm,
    overflow: 'hidden',
    shadowColor: palette.neutral['1000'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: border.radius.md,
  },
  cardContent: {
    flex: 1,
    paddingRight: spacing.padding.sn,
    paddingVertical: spacing.padding.sn,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: border.radius.lg,
    margin: spacing.margin.sn,
    minHeight: 100,
    width: 100,
  },
  categoryDescription: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    lineHeight: 20,
    marginBottom: spacing.margin.sm,
  },
  categoryName: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xl,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.xs,
  },
  container: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  header: {
    backgroundColor: palette.neutral['0'],
    paddingBottom: spacing.padding.md,
    paddingHorizontal: spacing.padding.mdd,
    paddingTop: spacing.padding.mdd,
  },
  headerSubtitle: {
    color: palette.neutral['600'],
    fontSize: typography.accent.md,
  },
  headerTitle: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.xmm,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.xs,
  },
  viewRecipeText: {
    color: palette.primary.dark,
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.medium,
  },
});
