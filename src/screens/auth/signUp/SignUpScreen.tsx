import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';

export const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />

      <Text style={styles.title} h1>
        Create Account
      </Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      <SignUpForm />
    </View>
  );
};
