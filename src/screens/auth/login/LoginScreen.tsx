import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/screens/auth/login/LoginScreen.styles';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const LoginScreen = () => {
  const { colors } = useThemeToggle();
  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        Login
      </Text>

      <LoginForm onForgotPassword={() => {}} />
    </View>
  );
};
