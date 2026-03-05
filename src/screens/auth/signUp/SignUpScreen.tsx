import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { SignUpFormData } from '@/features/auth/model/lib/SignUpValidation';
import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';

export const SignUpScreen = () => {
  const handleSignUp = async (values: SignUpFormData) => {
    try {
      console.log('Registering user:', values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />

      <Text style={styles.title} h1>
        Create Account
      </Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>

      <SignUpForm onSubmit={handleSignUp} onLogin={() => {}} />
    </View>
  );
};
