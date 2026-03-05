import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStack } from '@/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
