import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Settings } from '@/features/settings/ui/Settings';
import { styles } from '@/screens/settings/SettingsScreen.styles';
import { RootPage } from '@/screens/rootPage/RootPage';

export const SettingsScreen = () => {
  return (
    <RootPage title="Settings" showBackButton={true}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Settings />

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </RootPage>
  );
};
