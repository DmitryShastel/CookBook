import { StyleSheet } from 'react-native';
import { spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.padding.mdd,
    paddingTop: spacing.padding.xxxl,
  },
  logoContainer: {
    alignSelf: 'center',
    marginBottom: spacing.margin.mdd,
  },
  subtitle: {
    color: '#666',
    fontSize: typography.accent.md,
    marginBottom: spacing.margin.xl,
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: typography.accent.xxl,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.sm,
    textAlign: 'center',
  },
});
