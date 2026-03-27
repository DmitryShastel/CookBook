import { Text, View } from 'react-native';
import { styles } from '@/features/settings/ui/Settings.styles';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';
import { LanguageSetting } from '@/features/language/ui/LanguageSetting';
import { ThemeSetting } from '@/features/theme/ui/ThemeSetting';

export const Settings = () => {
  const { colors } = useThemeToggle();
  const { t } = useTranslation();

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
          <ThemeSetting />
        </View>
      </View>
    </View>
  );
};
