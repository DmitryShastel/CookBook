import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { ReusableUserInfo } from '@/components/ui/userInfo/ReusableUserInfo';
import { ReusableLike } from '@/components/ui/like/ReusableLike';
import { styles } from '@/components/ui/card/ReusableCard.style';
import { RecipeCardProps } from '@/components/ui/card/ReusableCard.types';

export const ReusableCard = ({
  initialLiked = false,
  userName,
  userAvatar,
  recipeImage,
  description,
}: RecipeCardProps) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.userContainer}>
        <ReusableUserInfo userAvatar={userAvatar} userName={userName} />
      </View>

      <Card.Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>{description}</Text>
      <ReusableLike initialLiked={initialLiked} />
    </Card>
  );
};
