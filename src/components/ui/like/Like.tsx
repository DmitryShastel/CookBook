import { LikeButtonInterface } from '@/components/ui/like/Like.types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '@/components/ui/like/Like.style';
import { pluralize } from '@/utils/Pluralize';
import { Pressable, View, Text } from 'react-native';
import { ICONS } from '@/constants/Icons';
import { useLike } from '@/features/like/hook/useLike';

export const Like = ({
  initialLiked = false,
  likesCount,
}: LikeButtonInterface) => {
  const { liked, likeCount, handleLike } = useLike(initialLiked, likesCount);

  return (
    <View style={styles.likeContainer}>
      <Pressable onPress={handleLike} style={styles.likeButton}>
        <Icon
          name={liked ? ICONS.like.active : ICONS.like.inactive}
          color={liked ? '#ff3b30' : '#666'}
          size={24}
          style={styles.likeIcon}
        />
        <Text style={[styles.likeText, liked && styles.likedText]}>
          {pluralize(likeCount, { one: 'like', other: 'likes' })}
        </Text>
      </Pressable>
    </View>
  );
};
