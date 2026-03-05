import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProfile } from '@/features/userProfile/ui/UserProfile';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <UserProfile />
      </View>
    </SafeAreaProvider>
  );
}
