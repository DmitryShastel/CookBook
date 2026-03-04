import { View, Text, Image } from 'react-native';
import { ReusableUserInfo } from '@/components/ui/userInfo/ReusableUserInfo';
import { ReusableLike } from '@/components/ui/like/ReusableLike';
import { styles } from '@/components/ui/card/ReusableCard.style';
import { RecipeCardProps } from '@/components/ui/card/ReusableCard.types';

export const ReusableCard = ({ initialLiked = false }: RecipeCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <ReusableUserInfo
          userAvatar={
            'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png'
          }
          userName={'Test User'}
        />
      </View>

      <Image
        source={{
          uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636',
        }}
        style={styles.recipeImage}
        resizeMode="cover"
      />

      <Text style={styles.description}>{'Test description'}</Text>
      <ReusableLike initialLiked={initialLiked} />
    </View>
  );
};
