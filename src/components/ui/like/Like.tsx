import { useState } from 'react';
import { LikeButtonInterface } from '@/components/ui/like/Like.types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '@/components/ui/like/Like.style';
import { Pluralize } from '@/utils/Pluralize';
import { Pressable, View, Text } from 'react-native';

export const Like = ({
  initialLiked = false,
  likesCount,
}: LikeButtonInterface) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeCount, setLikesCount] = useState(likesCount);

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.likeContainer}>
      <Pressable onPress={handleLike} style={styles.likeButton}>
        <Icon
          name={liked ? 'favorite' : 'favorite-border'}
          color={liked ? '#ff3b30' : '#666'}
          size={24}
          style={styles.likeIcon}
        />
        <Text style={[styles.likeText, liked && styles.likedText]}>
          {Pluralize(likeCount, 'like')}
        </Text>
      </Pressable>
    </View>
  );
};
