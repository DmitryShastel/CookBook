import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: border.radius.lg,
    elevation: 3,
    margin: spacing.margin.md,
    marginTop: 0,
    padding: spacing.padding.mdd,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: opacity.pressed,
    shadowRadius: border.radius.sm,
  },
  infoLabel: {
    color: '#666',
    fontSize: typography.accent.sm,
  },
  infoRow: {
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: spacing.padding.xxs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.padding.sn,
  },
  infoTitle: {
    color: '#333',
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
    marginBottom: spacing.margin.md,
  },
  infoValue: {
    color: '#333',
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.medium,
  },
});
