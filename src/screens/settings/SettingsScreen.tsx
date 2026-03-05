import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import { Settings } from '@/features/settings/ui/Settings';
import { styles } from '@/screens/settings/SettingsScreen.styles';

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle} h1>
          Settings
        </Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Settings />

        <View style={styles.footer}>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
