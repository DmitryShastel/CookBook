import { StyleSheet } from 'react-native';
import { spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: spacing.padding.qqe,
  },
  version: {
    color: '#999',
    fontSize: typography.accent.sm,
  },
});
