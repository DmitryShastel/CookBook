import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/features/settings/ui/Settings.styles';
import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const Settings = () => {
  const { theme, toggleTheme, colors } = useThemeToggle();
  const { t, i18n } = useTranslation();

  const handleLanguagePress = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const getCurrentLanguage = () => {
    return i18n.language === 'en' ? 'English' : 'Français';
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
          {t('SettingsScreen.preference')}
        </Text>
        <View
          style={[styles.sectionContent, { backgroundColor: colors.primary }]}
        >
          <SettingItem
            icon="language-outline"
            iconBgColor="#E3F2FD"
            iconColor="#1976D2"
            title={t('SettingsScreen.settingsItem.language')}
            value={getCurrentLanguage()}
            onPress={handleLanguagePress}
          />
          <SettingItem
            icon="color-palette-outline"
            iconBgColor="#FFF3E0"
            iconColor="#FF9800"
            title={t('SettingsScreen.settingsItem.theme')}
            value={theme === 'light' ? 'Light' : 'Dark'}
            onPress={handleThemePress}
          />
        </View>
      </View>
    </View>
  );
};
