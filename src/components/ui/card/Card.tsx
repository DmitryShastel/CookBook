import { Image, Text, View } from 'react-native';
import { styles } from '@/components/ui/card/Card.style';
import { RecipeCardInterface } from '@/components/ui/card/Card.types';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const Card = ({
  userName,
  userAvatar,
  recipeImage,
  description,
}: RecipeCardInterface) => {
  const { colors, theme } = useThemeToggle();
  return (
    <View
      style={[
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

      <Image
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
      </View>
    </View>
  );
};
