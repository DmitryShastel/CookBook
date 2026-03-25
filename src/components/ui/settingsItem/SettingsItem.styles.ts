import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  chevron: {
    marginLeft: spacing.margin.sm,
  },

  iconContainer: {
    alignItems: 'center',
    borderRadius: border.radius.xxxl,
    justifyContent: 'center',
    marginRight: spacing.margin.sm,
    maxHeight: 40,
    width: 40,
  },

  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  settingItem: {
    alignItems: 'center',
    borderBottomWidth: border.radius.sn,
    flexDirection: 'row',
    paddingHorizontal: spacing.padding.md,
    paddingVertical: border.radius.xxl,
    width: '100%',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: palette.neutral[1000],
    fontSize: typography.accent.md,
    fontWeight: typography.weight.medium,
    marginBottom: spacing.margin.xxs,
  },

  value: {
    color: palette.neutral[600],
    fontSize: typography.accent.sm,
  },
});
