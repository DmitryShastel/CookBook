import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/screens/rootPage/RootPage';
import { Card } from '@/components/ui/card/Card';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <RootScreen>
          <Card />
        </RootScreen>
      </View>
    </SafeAreaProvider>
  );
}
