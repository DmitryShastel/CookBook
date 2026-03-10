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
import { useEffect, useState } from 'react';
import { getRecipe, Recipe } from '@/shared/api/axios-instance';
import { Ionicons } from '@expo/vector-icons';
import { RecipeRouteProp } from '@/navigation/type';

export const RecipeScreen = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const route = useRoute<RecipeRouteProp>();
  const { recipeId } = route.params;
  const { getBack } = useNavigationHelper();

  useEffect(() => {
    getRecipe(recipeId).then((res) => {
      setRecipe(res);
    });
  }, [recipeId]);

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
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: recipe.strMealThumb }}
          style={styles.recipeImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>{recipe.strMeal}</Text>
          <Text style={styles.category}>
            {recipe.strCategory} • {recipe.strArea}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{ingredients.length}</Text>
              <Text style={styles.statLabel}>Ingredients</Text>
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

          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            {ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={styles.ingredientName}>{item.ingredient}</Text>
                <Text style={styles.ingredientAmount}>{item.measure}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.instructions}>{recipe.strInstructions}</Text>

          <View style={styles.linksContainer}>
            {recipe.strSource && (
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => openLink(recipe.strSource)}
              >
                <Ionicons name="link-outline" size={20} color="#007AFF" />
                <Text style={styles.linkText}>View Source</Text>
              </TouchableOpacity>
            )}

            {recipe.strYoutube && (
              <TouchableOpacity
                style={[styles.linkButton, styles.youtubeButton]}
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
