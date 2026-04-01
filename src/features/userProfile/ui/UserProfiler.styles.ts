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
    padding: spacing.padding.md3,
    shadowColor: palette.neutral['1000'],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.pressed,
    shadowRadius: border.radius.sm,
  },
  emailContainer: {
    alignItems: 'center',
    borderTopColor: palette.neutral['0'],
    borderTopWidth: border.radius.none,
    flexDirection: 'row',
    marginTop: spacing.margin.sm3,
    paddingTop: spacing.padding.sm2,
  },
  emailText: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    marginLeft: spacing.margin.sm2,
  },
  logoutButton: {
    backgroundColor: palette.error,
    borderRadius: border.radius.md,
    paddingHorizontal: spacing.padding.md3,
    paddingVertical: spacing.padding.md,
  },
  logoutIcon: {
    marginRight: spacing.margin.sm2,
  },
  logoutText: {
    borderTopColor: palette.neutral['0'],
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
    marginLeft: spacing.margin.x,
  },
  userInfoSection: {
    marginBottom: spacing.margin.md3,
  },
});
