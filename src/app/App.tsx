import { View } from 'react-native';
import { ReusableInput } from '@/components/ui/input/ReusableInput';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <ReusableInput />
      </View>
    </SafeAreaProvider>
  );
}
