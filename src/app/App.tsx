import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsScreen } from '@/screens/settings/SettingsScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <SettingsScreen />
      </View>
    </SafeAreaProvider>
  );
}
