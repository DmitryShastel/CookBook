import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from '@/navigation/MainTabNavigator';
import { LoginScreen } from '@/screens/auth/login/LoginScreen';
import { SignUpScreen } from '@/screens/auth/signUp/SignUpScreen';
import { RootStackParamList } from '@/navigation/type';
import { HomeScreen } from '@/screens/home/HomeScreen';
import { useFirebaseLogin } from '@/features/auth/hooks/login/useFirebaseAuth';
import { useSignInStore } from '@/shared/stores/auth/loginStore/useSignInStore';
import { Loader } from '@/utils/Loader';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  useFirebaseLogin();
  const { user, isLoading } = useSignInStore();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <Stack.Screen name="MainTabs">
          {() => <MainTabNavigator onLogout={() => {}} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
