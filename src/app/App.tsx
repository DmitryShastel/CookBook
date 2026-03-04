import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecipeList } from '@/features/recipeList/ui/RecipeList';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <RecipeList />
      </View>
    </SafeAreaProvider>
  );
}
