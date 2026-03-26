import { SettingItem } from '@/components/ui/settingsItem/SettingsItem';
import { useLanguage } from '@/features/language/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

export const LanguageSetting = () => {
  const { getCurrentLanguage, handleLanguagePress } = useLanguage();
  const { t } = useTranslation();

  return (
    <SettingItem
      icon="language-outline"
      // icon="language"
      iconBgColor="#E3F2FD"
      iconColor="#1976D2"
      title={t('SettingsScreen.settingsItem.language')}
      value={getCurrentLanguage()}
      onPress={handleLanguagePress}
    />
  );
};
