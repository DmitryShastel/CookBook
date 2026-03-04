import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpScreen } from '@/screens/auth/signUp/SignUpScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <SignUpScreen />
      </View>
    </SafeAreaProvider>
  );
}
