import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderRadius: border.radius.xxxl,
    height: 40,
    justifyContent: 'center',
    marginRight: spacing.margin.sn,
    width: 40,
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  settingItem: {
    backgroundColor: '#fff',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: border.radius.sn,
    paddingHorizontal: spacing.padding.md,
    paddingVertical: spacing.padding.x,
    width: '100%',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.medium,
    marginBottom: spacing.margin.xxs,
  },
  value: {
    color: '#666',
    fontSize: typography.accent.sm,
  },
});
