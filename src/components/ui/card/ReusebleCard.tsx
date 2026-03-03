import { View, Text, Image } from 'react-native';
import { ReusableUserInfo } from '@/components/ui/userInfo/ReusableUserInfo';
import { ReusableLike } from '@/components/ui/like/ReusableLike';
import { styles } from '@/components/ui/card/ReusableCard.style';
import { RecipeCardProps } from '@/components/ui/card/ReusableCard.types';

export const ReusableCard = ({
  userName,
  userAvatar,
  recipeImage,
  description,
  initialLiked = false,
}: RecipeCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <ReusableUserInfo userAvatar={userAvatar} userName={userName} />
      </View>

      <Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>{description}</Text>
      <ReusableLike initialLiked={initialLiked} />
    </View>
  );
};
