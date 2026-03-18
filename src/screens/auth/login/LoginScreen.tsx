import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/screens/auth/login/LoginScreen.styles';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const LoginScreen = () => {
  const { colors } = useThemeToggle();
  const { t } = useTranslation();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        {t('LoginScreen.title')}
      </Text>

      <LoginForm onForgotPassword={() => {}} />
    </View>
  );
};
