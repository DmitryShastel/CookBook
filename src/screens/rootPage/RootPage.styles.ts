import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  backButton: {
    padding: spacing.padding.sm,
  },
  content: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: border.radius.sn,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.padding.md,
  },
  headerLeft: {
    width: 40,
  },
  headerRight: {
    width: 40,
  },
  headerTitle: {
    color: '#333',
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
  },
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
  },
  tabBar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopColor: '#f0f0f0',
    borderTopWidth: border.radius.sn,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
    paddingHorizontal: spacing.padding.md,
  },
  tabButton: {
    paddingHorizontal: spacing.padding.md,
    paddingVertical: spacing.padding.sm,
  },
});
