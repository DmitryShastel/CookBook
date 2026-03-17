import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: border.radius.lg,
    elevation: 3,
    margin: spacing.margin.md,
    padding: spacing.padding.mdd,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.pressed,
    shadowRadius: border.radius.sm,
  },
  emailContainer: {
    alignItems: 'center',
    borderTopColor: '#f0f0f0',
    borderTopWidth: border.radius.sn,
    flexDirection: 'row',
    marginTop: spacing.margin.sn,
    paddingTop: spacing.padding.sn,
  },
  emailText: {
    color: '#666',
    fontSize: typography.accent.sm,
    marginLeft: spacing.margin.ssm,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    borderRadius: border.radius.md,
    paddingHorizontal: spacing.padding.mdd,
    paddingVertical: spacing.padding.md,
  },
  logoutIcon: {
    marginRight: spacing.margin.ssm,
  },
  logoutText: {
    color: '#fff',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
    marginLeft: spacing.margin.x,
  },
  userInfoSection: {
    marginBottom: spacing.margin.mdd,
  },
});
