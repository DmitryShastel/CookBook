import { FlatList, ListRenderItem, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { MOCK_RECIPES } from '@/features/recipeList/lib/recipe.mock';
import {
  Recipe,
  RecipeListProps,
} from '@/features/recipeList/model/types/RecipeList';
import { styles } from '@/features/recipeList/ui/RecipeList.style';
import { Card } from '@/components/ui/card/Card';
import { useNavigation } from '@react-navigation/native';
import { RecipeListNavigationProp } from '@/navigation/type';

export const RecipeList = ({ recipes = MOCK_RECIPES }: RecipeListProps) => {
  const navigation = useNavigation<RecipeListNavigationProp>();
  const handleRecipePress = (recipeId: string) => {
    navigation.navigate('Recipe', { recipeId });
  };

  const renderRecipeCard = ({ item }: { item: Recipe }) => (
    <TouchableOpacity
      onPress={() => handleRecipePress(item.id)}
      activeOpacity={0.7}
      style={styles.cardContainer}
    >
      <Card
        userAvatar={item.userAvatar}
        initialLiked={item.isLiked || false}
        recipeImage={item.recipeImage}
        userName={item.userName}
        description={item.description}
        likesCount={item.likesCount || 0}
      />
    </TouchableOpacity>
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
