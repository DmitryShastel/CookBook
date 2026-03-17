import { StyleSheet } from 'react-native';
import { spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  avatar: {
    marginRight: spacing.margin.ssm,
  },
  userContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: spacing.margin.sn,
  },
  userName: {
    color: '#333',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
});
