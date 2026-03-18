import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/features/settings/ui/Settings.styles';
import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const Settings = () => {
  const { theme, toggleTheme, colors } = useThemeToggle();
  const handleLanguagePress = () => {
    console.log('Language pressed');
  };

  const handleThemePress = () => {
    toggleTheme();
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>
          Preferences
        </Text>
        <View
          style={[styles.sectionContent, { backgroundColor: colors.primary }]}
        >
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
            value={theme === 'light' ? 'Light' : 'Dark'}
            onPress={handleThemePress}
          />
        </View>
      </View>
    </View>
  );
};
