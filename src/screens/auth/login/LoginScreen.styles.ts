import { StyleSheet } from 'react-native';
import { spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.padding.mdd,
  },
  logoContainer: {
    marginBottom: spacing.margin.mdd,
  },
  title: {
    color: '#000',
    fontSize: typography.accent.xmm,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.xxxl,
  },
});
