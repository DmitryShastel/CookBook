import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecipeList } from '@/features/recipeList/ui/RecipeList';
import { RecipeScreen } from '@/screens/recipe/RecipeScreen';
import { HomeStackParamList } from '@/navigation/type';
import { CategoryScreen } from '@/screens/category/CategoryScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="RecipeList" component={RecipeList} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
};
