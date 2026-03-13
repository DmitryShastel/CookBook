import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/navigation/RootStack';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
        <FlashMessage />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
