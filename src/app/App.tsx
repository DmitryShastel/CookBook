import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReusableButton } from '@/components/ui/button/ReusableButton';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ReusableButton title={'test'} />
      </View>
    </SafeAreaProvider>
  );
}
