import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  backButton: {
    padding: spacing.padding.sm,
  },
  content: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: palette.neutral['0'],
    borderBottomColor: palette.neutral['0'],
    borderBottomWidth: border.radius.none,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minheight: 60,
    paddingHorizontal: spacing.padding.md,
  },
  headerLeft: {
    width: 40,
  },
  headerRight: {
    width: 40,
  },
  headerTitle: {
    color: palette.neutral['1000'],
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
  },
  safeArea: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  tabBar: {
    alignItems: 'center',
    backgroundColor: palette.neutral['0'],
    borderTopColor: palette.neutral['0'],
    borderTopWidth: border.radius.none,
    flexDirection: 'row',
    justifyContent: 'space-around',
    minheight: 60,
    paddingHorizontal: spacing.padding.md,
  },
  tabButton: {
    paddingHorizontal: spacing.padding.md,
    paddingVertical: spacing.padding.sm,
  },
});
