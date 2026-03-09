import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/app/App.styles';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from '@/navigation/RootStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
