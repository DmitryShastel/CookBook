import { Image, Text } from 'react-native';
import { styles } from '@/entities/auth/login/LoginScreen.styles';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';
import { useAnimatedScreen } from '@/shared/reanimated/hooks/useAnimatedScreen';
import Animated from 'react-native-reanimated';

export const LoginScreen = () => {
  const { colors } = useThemeToggle();
  const { t } = useTranslation();
  const { animatedStyle } = useAnimatedScreen();

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: colors.background.primary },
        animatedStyle,
      ]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        {t('LoginScreen.title')}
      </Text>

      <LoginForm onForgotPassword={() => {}} />
    </Animated.View>
  );
};
