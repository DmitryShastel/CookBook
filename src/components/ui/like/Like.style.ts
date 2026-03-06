import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  likeButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  likeContainer: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  likeIcon: {
    marginRight: 8,
  },
  likeText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 0,
  },
  likedText: {
    color: '#ff3b30',
    fontWeight: '500',
  },
});
