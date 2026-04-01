import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: border.radius.xxxl,
    marginRight: spacing.margin.sm2,
    minHeight: 40,
    width: 40,
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.margin.sm3,
  },
  userName: {
    color: palette.neutral['800'],
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
});
