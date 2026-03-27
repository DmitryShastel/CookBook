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
    borderRadius: border.radius.lg,
    elevation: 3,
    margin: spacing.margin.md,
    padding: spacing.padding.mdd,
    shadowColor: palette.neutral['1000'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.pressed,
    shadowRadius: border.radius.sm,
  },
  emailContainer: {
    alignItems: 'center',
    borderTopColor: palette.neutral['0'],
    borderTopWidth: border.radius.sn,
    flexDirection: 'row',
    marginTop: spacing.margin.sn,
    paddingTop: spacing.padding.sn,
  },
  emailText: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    marginLeft: spacing.margin.ssm,
  },
  logoutButton: {
    backgroundColor: palette.error,
    borderRadius: border.radius.md,
    paddingHorizontal: spacing.padding.mdd,
    paddingVertical: spacing.padding.md,
  },
  logoutIcon: {
    marginRight: spacing.margin.ssm,
  },
  logoutText: {
    borderTopColor: palette.neutral['0'],
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
    marginLeft: spacing.margin.x,
  },
  userInfoSection: {
    marginBottom: spacing.margin.mdd,
  },
});
