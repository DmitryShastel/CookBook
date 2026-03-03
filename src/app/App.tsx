import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecipeCard } from '@/components/ui/card/ReusebleCard';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <RecipeCard
          recipeImage={
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636'
          }
          userName={'Test User'}
          description={'Test Description'}
          userAvatar={
            'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png'
          }
          initialLiked={true}
        />
      </View>
    </SafeAreaProvider>
  );
}
