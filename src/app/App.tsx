import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/screens/rootPage/RootPage';
import { RecipeList } from '@/features/recipeList/ui/RecipeList';
import { styles } from '@/app/App.styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RootScreen>
          <RecipeList />
        </RootScreen>
      </View>
    </SafeAreaProvider>
  );
}
