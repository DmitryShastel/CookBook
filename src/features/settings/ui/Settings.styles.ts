import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  section: {
    marginTop: spacing.margin.mdd,
  },
  sectionContent: {
    backgroundColor: '#fff',
    borderBottomWidth: border.radius.sn,
    borderColor: '#f0f0f0',
    borderTopWidth: border.radius.sn,
  },
  sectionTitle: {
    color: '#666',
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.semiBold,
    letterSpacing: 0.5,
    marginBottom: spacing.margin.sm,
    marginLeft: spacing.margin.mdd,
    textTransform: 'uppercase',
  },
});
