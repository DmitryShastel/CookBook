import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/features/recipeList/ui/RecipeList.style';
import { Card } from '@/components/ui/card/Card';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  RecipeListNavigationProp,
  RecipeListRouteProp,
} from '@/navigation/type';
import { useEffect, useState } from 'react';
import { getCategoryByTitle, MealSummary } from '@/shared/api/axios-instance';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';

export const RecipeList = () => {
  const [recipes, setRecipes] = useState<MealSummary[]>([]);
  const { getBack } = useNavigationHelper();
  const navigation = useNavigation<RecipeListNavigationProp>();
  const route = useRoute<RecipeListRouteProp>();
  const { categoryTitle } = route.params;
  const handleRecipePress = (recipeId: string) => {
    navigation.navigate('Recipe', { recipeId });
  };

  useEffect(() => {
    getCategoryByTitle(categoryTitle).then((res) => {
      setRecipes(res);
    });
  });

  const renderRecipeCard = ({ item }: { item: MealSummary }) => (
    <TouchableOpacity
      onPress={() => handleRecipePress(item.idMeal)}
      activeOpacity={0.7}
      style={styles.cardContainer}
    >
      <Card recipeImage={item.strMealThumb} description={item.strMeal} />
    </TouchableOpacity>
  );

  const renderEmptyComponent = () => (
    <Text style={styles.emptyText}>No recipes found</Text>
  );

  return (
    <RootPage
      title={`${categoryTitle} Recipes`}
      showBackButton={true}
      onBackPress={getBack}
    >
      <FlatList
        data={recipes}
        renderItem={renderRecipeCard as ListRenderItem<MealSummary>}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
      />
    </RootPage>
  );
};
