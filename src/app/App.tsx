import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/screens/rootPage/RootPage';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';
import { Button } from '@/components/ui/button/Button';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <RootScreen>
          {/*<UserProfileScreen />*/}
          <Button />
        </RootScreen>
      </View>
    </SafeAreaProvider>
  );
}
