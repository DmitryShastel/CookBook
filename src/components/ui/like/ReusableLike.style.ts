import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  likeButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  likeContainer: {
    borderTopColor: '#f0f0f0',
    borderTopWidth: 1,
    paddingTop: 12,
  },
  likeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  likeText: {
    color: '#666',
    fontSize: 14,
  },
  likedIcon: {
    color: '#ff3b30',
  },
  likedText: {
    color: '#ff3b30',
    fontWeight: '500',
  },
});
