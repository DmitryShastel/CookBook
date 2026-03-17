import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  likeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: spacing.padding.x,
    paddingVertical: spacing.padding.x,
  },
  likeContainer: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: border.radius.sn,
    paddingTop: spacing.padding.sn,
  },
  likeIcon: {
    marginRight: spacing.margin.sm,
  },
  likeText: {
    color: '#666',
    fontSize: typography.size.sm,
    marginLeft: spacing.margin.x,
  },
  likedText: {
    color: '#ff3b30',
    fontWeight: typography.weight.medium,
  },
});
