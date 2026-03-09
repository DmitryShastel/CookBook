import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
// import { SignUpFormData } from '@/features/auth/model/lib/SignUpValidation';
// import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';

interface SignUpScreenProps {
  onSignUp?: () => void;
}

export const SignUpScreen = ({ onSignUp }: SignUpScreenProps) => {
  // const handleSignUp = async (values: SignUpFormData) => {
  //   try {
  //     console.log('Registering user:', values);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSignUp = () => {
    onSignUp?.();
  };

  //don't remove
  // return (
  //   <View style={styles.container}>
  //     <Image containerStyle={styles.logoContainer} resizeMode="contain" />
  //
  //     <Text style={styles.title} h1>
  //       Create Account
  //     </Text>
  //     <Text style={styles.subtitle}>Sign up to get started</Text>
  //
  //     <SignUpForm onSubmit={handleSignUp} onLogin={() => {}} />
  //   </View>
  // );
  //for fake registration
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up (demo)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};
