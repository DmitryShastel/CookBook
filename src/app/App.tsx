import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootScreen } from '@/screens/rootPage/RootPage';
import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <RootScreen>
          <SettingItem />
        </RootScreen>
      </View>
    </SafeAreaProvider>
  );
}
