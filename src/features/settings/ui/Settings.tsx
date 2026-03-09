import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/features/settings/ui/Settings.styles';
import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';

export const Settings = () => {
  const handleLanguagePress = () => {
    console.log('Language pressed');
  };

  const handleThemePress = () => {
    console.log('Theme pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.sectionContent}>
          <SettingItem
            icon="language-outline"
            iconBgColor="#E3F2FD"
            iconColor="#1976D2"
            title="Language"
            value="English"
            onPress={handleLanguagePress}
          />
          <SettingItem
            icon="color-palette-outline"
            iconBgColor="#FFF3E0"
            iconColor="#FF9800"
            title="Theme"
            value="Light"
            onPress={handleThemePress}
          />
        </View>
      </View>
    </View>
  );
};
