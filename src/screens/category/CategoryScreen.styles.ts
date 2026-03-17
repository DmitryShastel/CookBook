import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: border.radius.xl,
    elevation: 4,
    flexDirection: 'row',
    marginHorizontal: spacing.margin.md,
    marginVertical: spacing.margin.sm,
    overflow: 'hidden',
    shadowColor: '#000',
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
    height: 100,
    margin: spacing.margin.sn,
    width: 100,
  },
  categoryDescription: {
    color: '#666',
    fontSize: typography.accent.sm,
    lineHeight: 20,
    marginBottom: spacing.margin.sm,
  },
  categoryName: {
    color: '#1a1a1a',
    fontSize: typography.accent.xl,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.xs,
  },
  container: {
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  header: {
    backgroundColor: '#f8f9fa',
    paddingBottom: spacing.padding.md,
    paddingHorizontal: spacing.padding.mdd,
    paddingTop: spacing.padding.mdd,
  },
  headerSubtitle: {
    color: '#666',
    fontSize: typography.accent.md,
  },
  headerTitle: {
    color: '#1a1a1a',
    fontSize: typography.accent.xmm,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.xs,
  },
  viewRecipeText: {
    color: '#007AFF',
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.medium,
  },
});
