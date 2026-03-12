import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from '@/screens/auth/login/LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { LoginForm } from '@/features/auth/ui/loginForm/LoginForm';

// interface LoginScreenProps {
//   onLogin?: () => void;
// }

// export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
export const LoginScreen = () => {
  // const navigation = useNavigation();

  // const handleLogin = () => {
  //   onLogin?.();
  // };
  //don't remove
  return (
    <View style={styles.container}>
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />
      <Text style={styles.title} h1>
        Login
      </Text>

      <LoginForm onForgotPassword={() => {}} />
    </View>
  );

  //for fake login
  // return (
  //   <View style={styles.container}>
  //     <Text>Login Screen</Text>
  //     <TouchableOpacity onPress={handleLogin}>
  //       <Text>Login (demo)</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
  //       <Text>Go to Sign Up</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};
