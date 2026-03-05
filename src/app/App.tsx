import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/navigation/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}
