import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/screens/rootPage/RootPage';
import { Input } from '@/components/ui/input/Input';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <RootScreen>
          <Input />
        </RootScreen>
      </View>
    </SafeAreaProvider>
  );
}
