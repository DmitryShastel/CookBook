import { FlatList, ListRenderItem, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/features/recipeList/ui/RecipeList.style';
import { Card } from '@/components/card/Card';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  RecipeListNavigationProp,
  RecipeListRouteProp,
} from '@/shared/navigation/types/type';
import { RootPage } from '@/pages/rootPage/RootPage';
import { MealSummary } from '@/features/recipeList/api/types/RecipeList';
import { useCategoryMealsQuery } from '@/features/recipeList/api/RecipeListQuery';
import { Loader } from '@/components/loader/Loader';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const RecipeList = () => {
  const route = useRoute<RecipeListRouteProp>();
  const { categoryTitle } = route.params;
  const { data: recipes, isLoading } = useCategoryMealsQuery(categoryTitle);
  const navigation = useNavigation<RecipeListNavigationProp>();
  const { colors, theme } = useThemeToggle();
  const { t } = useTranslation();

  const handleRecipePress = (recipeId: string) => {
    navigation.navigate('Recipe', { recipeId });
  };

  const getBack = () => {
    navigation.goBack();
  };

  const renderRecipeCard = ({ item }: { item: MealSummary }) => (
    <TouchableOpacity
      onPress={() => handleRecipePress(item.idMeal)}
      activeOpacity={0.7}
      style={[
        styles.cardContainer,
        {
          backgroundColor: colors.card?.background || colors.surface,
          borderColor: colors.card?.border || colors.border,
          borderWidth: theme === 'dark' ? 1 : 0,
          shadowColor: theme === 'dark' ? '#000' : '#666',
        },
      ]}
    >
      <Card recipeImage={item.strMealThumb} description={item.strMeal} />
    </TouchableOpacity>
  );

  const renderEmptyComponent = () => (
    <Text style={[styles.emptyText, { color: colors.text.primary }]}>
      {t('RecipeList.recipeNotFound')}
    </Text>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <RootPage
      title={t('RecipeList.title', {
        category: t(`RecipeList.${categoryTitle}`),
      })}
      showBackButton={true}
      onBackPress={getBack}
    >
      <FlatList
        data={recipes ?? []}
        renderItem={renderRecipeCard as ListRenderItem<MealSummary>}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
        windowSize={5}
        contentContainerStyle={[
          styles.list,
          {
            backgroundColor: colors.background.primary,
          },
        ]}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
      />
    </RootPage>
  );
};
