import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const ThemeSetting = () => {
  const { theme, toggleTheme } = useThemeToggle();
  const { t } = useTranslation();

  return (
    <SettingItem
      icon="color-palette-outline"
      iconBgColor="#FFF3E0"
      iconColor="#FF9800"
      title={t('SettingsScreen.settingsItem.theme')}
      value={theme === 'light' ? 'Light' : 'Dark'}
      onPress={toggleTheme}
    />
  );
};
