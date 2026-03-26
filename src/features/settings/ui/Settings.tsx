import { View, Text } from 'react-native';
import { styles } from '@/features/settings/ui/Settings.styles';
import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';
import { LanguageSetting } from '@/features/language/ui/LanguageSetting';

export const Settings = () => {
  const { theme, toggleTheme, colors } = useThemeToggle();
  const { t } = useTranslation();

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
          <LanguageSetting />
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
