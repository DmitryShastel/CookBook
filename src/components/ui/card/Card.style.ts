import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: border.radius.lg,
    height: 300,
    marginHorizontal: spacing.margin.md,
    marginVertical: spacing.margin.sm,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: border.radius.sm,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    color: '#666',
    fontSize: typography.accent.sm,
    lineHeight: 20,
    marginBottom: typography.accent.xs,
    marginHorizontal: spacing.margin.x,
    paddingHorizontal: spacing.padding.x,
  },
  recipeImage: {
    borderRadius: border.radius.md,
    height: 200,
    marginBottom: border.radius.lg,
    width: '100%',
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.margin.sn,
  },
});
