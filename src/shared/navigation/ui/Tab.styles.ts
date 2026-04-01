import { palette } from '@/shared/styles/CommonStyles';

export const styles = {
  tabBar: {
    flexDirection: 'row' as const,
    minHeight: 60,
    backgroundColor: palette.neutral['0'],
    borderTopWidth: 1,
    borderTopColor: palette.neutral['0'],
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  },
};
