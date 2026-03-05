import { useState } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
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
      <Button
        type="clear"
        onPress={handleLike}
        icon={
          <Icon
            name={liked ? 'favorite' : 'favorite-border'}
            color={liked ? '#ff3b30' : '#666'}
            size={24}
          />
        }
        title={` ${likesCount} ${likesCount === 1 ? 'like' : 'likes'}`}
        titleStyle={[styles.likeText, liked && styles.likedText]}
        buttonStyle={styles.likeButton}
        iconContainerStyle={styles.likeIcon}
      />
    </View>
  );
};
