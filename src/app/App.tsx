import { View } from 'react-native';
import { ReusableButton } from '@/components/ui/button/ReusableButton';

export default function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View>
      <ReusableButton
        title={'test'}
        callback={() => {}}
        accessibilityLabel={'test123'}
      />
    </View>
  );
}
