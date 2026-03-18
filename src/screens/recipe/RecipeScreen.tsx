import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useRoute } from '@react-navigation/native';
import { styles } from './RecipeScreen.styles';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';
import { Ionicons } from '@expo/vector-icons';
import { RecipeRouteProp } from '@/navigation/type';
import { useRecipeQuery } from '@/features/recipeList/api/RecipeListQuery';
import { Recipe } from '@/features/recipeList/api/types/RecipeList';
import { Loader } from '@/utils/Loader';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const RecipeScreen = () => {
  const route = useRoute<RecipeRouteProp>();
  const { recipeId } = route.params;
  const { data: recipe, isLoading } = useRecipeQuery(recipeId);
  const { getBack } = useNavigationHelper();
  const { colors } = useThemeToggle();

  const getIngredients = () => {
    if (!recipe) return [];

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
      const measure = recipe[`strMeasure${i}` as keyof Recipe];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!recipe) {
    return (
      <RootPage
        title="Recipe Not Found"
        showBackButton={true}
        onBackPress={getBack}
      >
        <View style={styles.centerContainer}>
          <Text style={styles.notFoundText}>Recipe not found</Text>
        </View>
      </RootPage>
    );
  }

  const ingredients = getIngredients();

  return (
    <RootPage
      title={recipe.strMeal}
      showBackButton={true}
      onBackPress={getBack}
    >
      <ScrollView
        contentContainerStyle={[
          styles.centerContainer,
          { backgroundColor: colors.background.tertiary },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: recipe.strMealThumb }}
          style={styles.recipeImage}
          resizeMode="cover"
        />

        <View
          style={[
            styles.content,
            { backgroundColor: colors.background.secondary },
          ]}
        >
          <Text style={[styles.title, { color: colors.text.primary }]}>
            {recipe.strMeal}
          </Text>
          <Text style={[styles.category, { color: colors.text.primary }]}>
            {recipe.strCategory} • {recipe.strArea}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text.inverse }]}>
                {ingredients.length}
              </Text>
              <Text style={[styles.statLabel, { color: colors.text.inverse }]}>
                Ingredients
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text.inverse }]}>
                30
              </Text>
              <Text style={[styles.statLabel, { color: colors.text.inverse }]}>
                Minutes
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.text.inverse }]}>
                4.5
              </Text>
              <Text style={[styles.statLabel, { color: colors.text.inverse }]}>
                Rating
              </Text>
            </View>
          </View>

          <Text style={[styles.sectionTitle, { color: colors.text.secondary }]}>
            Ingredients
          </Text>
          <View
            style={[
              styles.ingredientsContainer,
              { backgroundColor: colors.surface },
            ]}
          >
            {ingredients.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.ingredientItem,
                  { borderBottomColor: colors.border },
                ]}
              >
                <Text
                  style={[
                    styles.ingredientName,
                    { color: colors.text.primary },
                  ]}
                >
                  {item.ingredient}
                </Text>
                <Text
                  style={[
                    styles.ingredientAmount,
                    { color: colors.text.secondary },
                  ]}
                >
                  {item.measure}
                </Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionTitle, { color: colors.text.secondary }]}>
            Instructions
          </Text>
          <Text style={[styles.instructions, { color: colors.text.secondary }]}>
            {recipe.strInstructions}
          </Text>

          <View style={styles.linksContainer}>
            {recipe.strSource && (
              <TouchableOpacity
                style={[
                  styles.linkButton,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  },
                ]}
                onPress={() => openLink(recipe.strSource)}
              >
                <Ionicons
                  name="link-outline"
                  size={20}
                  color={colors.primary.main}
                />
                <Text style={[styles.linkText, { color: colors.primary.main }]}>
                  View Source
                </Text>
              </TouchableOpacity>
            )}

            {recipe.strYoutube && (
              <TouchableOpacity
                style={[
                  styles.linkButton,
                  styles.youtubeButton,
                  {
                    backgroundColor: colors.surface,
                    borderColor: colors.border,
                  },
                ]}
                onPress={() => openLink(recipe.strYoutube)}
              >
                <Ionicons name="logo-youtube" size={20} color="#FF0000" />
                <Text style={[styles.linkText, styles.youtubeText]}>
                  Watch on YouTube
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </RootPage>
  );
};
