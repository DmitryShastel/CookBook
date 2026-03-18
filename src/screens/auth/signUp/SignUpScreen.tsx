import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const SignUpScreen = () => {
  const { colors } = useThemeToggle();
  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />

      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        Create Account
      </Text>
      <Text style={[styles.subtitle, { color: colors.text.primary }]}>
        Sign up to get started
      </Text>

      <SignUpForm />
    </View>
  );
};
