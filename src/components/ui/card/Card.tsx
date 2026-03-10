import { View } from 'react-native';
import { Card as RNCard, Text } from 'react-native-elements';
import { UserInfo } from '@/components/ui/userInfo/UserInfo';
import { Like } from '@/components/ui/like/Like';
import { styles } from '@/components/ui/card/Card.style';
import { RecipeCardProps } from '@/components/ui/card/Card.types';

export const Card = ({
  initialLiked,
  userName,
  userAvatar,
  recipeImage,
  description,
  likesCount,
}: RecipeCardProps) => {
  return (
    <RNCard containerStyle={styles.card}>
      <View style={styles.userContainer}>
        {/*<UserInfo userAvatar={userAvatar} userName={userName} />*/}
      </View>

      <RNCard.Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        {/*<Like initialLiked={initialLiked} likesCount={likesCount} />*/}
      </View>
    </RNCard>
  );
};
