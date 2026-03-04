import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/auth/login/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <LoginScreen />
      </View>
    </SafeAreaProvider>
  );
}
