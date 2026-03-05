import { View, FlatList, ListRenderItem } from 'react-native';
import { Text } from 'react-native-elements';
import { MOCK_RECIPES } from '@/features/recipeList/lib/recipe.mock';
import {
  Recipe,
  RecipeListProps,
} from '@/features/recipeList/model/types/RecipeList';
import { styles } from '@/features/recipeList/ui/RecipeList.style';
import { ReusableCard } from '@/components/ui/card/ReusebleCard';

export const RecipeList = ({ recipes = MOCK_RECIPES }: RecipeListProps) => {
  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <View style={styles.cardContainer}>
      <ReusableCard
        userAvatar={item.userAvatar}
        initialLiked={item.isLiked || false}
        recipeImage={item.recipeImage}
        userName={item.userName}
        description={item.description}
      />
    </View>
  );

  const data = recipes || MOCK_RECIPES;
  const renderEmptyComponent = () => (
    <Text style={styles.emptyText}>No recipes found</Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderRecipeCard as ListRenderItem<Recipe>}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};
