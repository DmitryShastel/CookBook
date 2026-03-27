import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const handleLanguagePress = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const getCurrentLanguage = () => {
    return i18n.language === 'en' ? 'English' : 'Français';
  };

  return {
    handleLanguagePress,
    getCurrentLanguage,
  };
};
