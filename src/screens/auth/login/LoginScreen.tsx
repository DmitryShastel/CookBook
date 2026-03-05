import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';
import { styles } from '@/screens/auth/login/LoginScreen.styles';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={styles.title} h1>
        Login
      </Text>

      <LoginForm onForgotPassword={() => {}} onSignUp={() => {}} />
    </View>
  );
};
