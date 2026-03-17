import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: border.radius.md,
    justifyContent: 'center',
    paddingHorizontal: spacing.padding.lg,
    paddingVertical: spacing.padding.sn,
  },
  disabled: {
    backgroundColor: '#CCCCCC',
  },
  disabledText: {
    color: '#666666',
  },
  text: {
    color: '#FFFFFF',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
});
