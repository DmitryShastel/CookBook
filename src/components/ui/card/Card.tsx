import { View } from 'react-native';
import { Card as RNCard, Text } from 'react-native-elements';
import { ReusableUserInfo } from '@/components/ui/userInfo/UserInfo';
import { Like } from '@/components/ui/like/Like';
import { styles } from '@/components/ui/card/Card.style';
import { RecipeCardProps } from '@/components/ui/card/Card.types';

export const Card = ({
  initialLiked = false,
  userName,
  userAvatar,
  recipeImage,
  description,
}: RecipeCardProps) => {
  return (
    <RNCard containerStyle={styles.card}>
      <View style={styles.userContainer}>
        <ReusableUserInfo userAvatar={userAvatar} userName={userName} />
      </View>

      <RNCard.Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>{description}</Text>
      <Like initialLiked={initialLiked} />
    </RNCard>
  );
};
