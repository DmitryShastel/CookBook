import { ActivityIndicator, View } from 'react-native';
import { styles } from '@/components/loader/Loader.styles';
import { palette } from '@/shared/styles/CommonStyles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.primary.dark} />
    </View>
  );
};
