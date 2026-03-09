import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Settings } from '@/features/settings/ui/Settings';
import { styles } from '@/screens/settings/SettingsScreen.styles';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';

export const SettingsScreen = () => {
  const { getBack } = useNavigationHelper();

  return (
    <RootPage title="Settings" showBackButton={true} onBackPress={getBack}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Settings />

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </RootPage>
  );
};
