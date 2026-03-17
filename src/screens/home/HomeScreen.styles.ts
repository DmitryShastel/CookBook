import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2089dc',
    borderRadius: border.radius.lg,
    paddingVertical: spacing.padding.md,
  },
  buttonContainer: {
    gap: 16,
    paddingBottom: spacing.padding.qqe,
    paddingHorizontal: spacing.padding.ssw,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: spacing.padding.xxxl,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    color: '#666',
    fontSize: typography.accent.lg,
    marginTop: spacing.margin.mdd,
    paddingHorizontal: spacing.padding.ssw,
    textAlign: 'center',
  },
});
