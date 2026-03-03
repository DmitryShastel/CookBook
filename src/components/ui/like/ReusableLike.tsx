import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LikeButtonProps } from '@/components/ui/like/ReusableLike.types';
import { styles } from '@/components/ui/like/ReusableLike.style';

export const ReusableLike = ({ initialLiked = false }: LikeButtonProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(124);

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
      <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
        <Text style={[styles.likeIcon, liked && styles.likedIcon]}>
          {liked ? '❤️' : '🤍'}
        </Text>
        <Text style={[styles.likeText, liked && styles.likedText]}>
          {likesCount} {likesCount === 1 ? 'like' : 'likes'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
