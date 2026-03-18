import { View } from 'react-native';
import { Card as RNCard, Text } from 'react-native-elements';
import { UserInfo } from '@/components/ui/userInfo/UserInfo';
import { Like } from '@/components/ui/like/Like';
import { styles } from '@/components/ui/card/Card.style';
import { RecipeCardProps } from '@/components/ui/card/Card.types';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const Card = ({
  initialLiked,
  userName,
  userAvatar,
  recipeImage,
  description,
  likesCount,
}: RecipeCardProps) => {
  const { colors, theme } = useThemeToggle();
  return (
    // <RNCard containerStyle={styles.card}>
    <RNCard
      containerStyle={[
        styles.card,
        {
          backgroundColor: colors.card?.background || colors.surface,

          borderColor: colors.card?.border || colors.border,
          borderWidth: theme === 'dark' ? 1 : 0,

          shadowColor: theme === 'dark' ? '#000' : '#666',
        },
      ]}
    >
      <View style={styles.userContainer}></View>

      <RNCard.Image
        source={{ uri: recipeImage }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <View style={styles.contentContainer}>
        <Text
          style={[
            styles.description,
            {
              color: colors.text.secondary,
            },
          ]}
          numberOfLines={3}
        >
          {description}
        </Text>
        {/*<Like initialLiked={initialLiked} likesCount={likesCount} />*/}
      </View>
    </RNCard>
  );
};
