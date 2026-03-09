import { Image, ScrollView, Text, View } from 'react-native';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useRoute } from '@react-navigation/native';
import { MOCK_RECIPES } from '@/features/recipeList/lib/recipe.mock';
import { styles } from './RecipeScreen.styles';
import { RecipeDetailsRouteProp } from '@/screens/recipe/type';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';

export const RecipeScreen = () => {
  const route = useRoute<RecipeDetailsRouteProp>();
  const { recipeId } = route.params;
  const { getBack } = useNavigationHelper();

  const recipe = MOCK_RECIPES.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <RootPage title="Recipe Not Found" showBackButton={true}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Recipe not found</Text>
        </View>
      </RootPage>
    );
  }

  return (
    <RootPage
      title={recipe.userName}
      showBackButton={true}
      onBackPress={getBack}
    >
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: recipe.recipeImage }}
          style={styles.recipeImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>{recipe.userName}'s Recipe</Text>
          <Text style={styles.userName}>by {recipe.userName}</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{recipe.likesCount}</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>30</Text>
              <Text style={styles.statLabel}>Minutes</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>4.5</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{recipe.description}</Text>

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Flour</Text>
              <Text style={styles.ingredientAmount}>2 cups</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Sugar</Text>
              <Text style={styles.ingredientAmount}>1 cup</Text>
            </View>
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientName}>Eggs</Text>
              <Text style={styles.ingredientAmount}>2</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.instructions}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </ScrollView>
    </RootPage>
  );
};
