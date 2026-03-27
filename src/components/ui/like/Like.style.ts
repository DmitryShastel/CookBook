import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  likeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: spacing.padding.x,
    paddingVertical: spacing.padding.x,
  },
  likeContainer: {
    borderTopColor: palette.neutral['0'],
    borderTopWidth: border.radius.sn,
    paddingTop: spacing.padding.sn,
  },
  likeIcon: {
    marginRight: spacing.margin.sm,
  },
  likeText: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    marginLeft: spacing.margin.x,
  },
  likedText: {
    color: palette.error,
    fontWeight: typography.weight.medium,
  },
});
