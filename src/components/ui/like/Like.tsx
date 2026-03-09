import { useState } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { LikeButtonProps } from '@/components/ui/like/Like.types';
import { styles } from '@/components/ui/like/Like.style';
import { Pluralize } from '@/utils/Pluralize';

export const Like = ({ initialLiked = false, likesCount }: LikeButtonProps) => {
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
        title={` ${Pluralize(likeCount, 'like')}`}
        titleStyle={[styles.likeText, liked && styles.likedText]}
        buttonStyle={styles.likeButton}
        iconContainerStyle={styles.likeIcon}
      />
    </View>
  );
};
