import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/screens/auth/login/LoginScreen.styles';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={styles.title} h1>
        Login
      </Text>

      <LoginForm onForgotPassword={() => {}} />
    </View>
  );
};
