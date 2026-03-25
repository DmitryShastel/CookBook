import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.neutral['0'],
    borderRadius: border.radius.lg,
    marginHorizontal: spacing.margin.md,
    marginVertical: spacing.margin.sm,
    padding: spacing.padding.sn,
    shadowColor: palette.neutral['1000'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.disabled,
    shadowRadius: border.radius.sm,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    color: palette.neutral['600'],
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
