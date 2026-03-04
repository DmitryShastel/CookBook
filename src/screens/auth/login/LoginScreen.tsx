import { View, Text, Image } from 'react-native';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';
import { styles } from '@/screens/auth/login/LoginScreen.styles';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <LoginForm onForgotPassword={() => {}} onSignUp={() => {}} />
    </View>
  );
};
