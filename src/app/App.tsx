import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <UserProfileScreen />
      </View>
    </SafeAreaProvider>
  );
}
