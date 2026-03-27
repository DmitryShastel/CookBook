import { ActivityIndicator, View } from 'react-native';
import { styles } from '@/components/ui/loader/Loader.styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2089dc" />
    </View>
  );
};
