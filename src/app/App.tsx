import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReusableLike } from '@/components/ui/like/ReusableLike';

export default function App() {
  return (
    // <SafeAreaProvider>
    //   <View style={{ flex: 1, backgroundColor: '#fff' }}>
    //     <ReusableCard
    //       userName={'test'}
    //       description={'test description'}
    //       userAvatar={
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTGXHAKA1a4JqZZxPGvXr2_D2bQ5ZZffRNg&s'
    //       }
    //       initialLiked={true}
    //       recipeImage={
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUk4hWa0Y2vBF_-6tWTixdrd0LPfdT6rEkA&s'
    //       }
    //     />
    //   </View>
    // </SafeAreaProvider>
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ReusableLike />
      </View>
    </SafeAreaProvider>
  );
}
