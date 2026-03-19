import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const SignUpScreen = () => {
  const { colors } = useThemeToggle();
  const { t } = useTranslation();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />

      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        {t('SignUpScreen.title')}
      </Text>
      <Text style={[styles.subtitle, { color: colors.text.primary }]}>
        {t('SignUpScreen.description')}
      </Text>

      <SignUpForm />
    </View>
  );
};
