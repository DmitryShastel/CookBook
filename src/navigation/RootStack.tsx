import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from '@/navigation/MainTabNavigator';
import { LoginScreen } from '@/screens/auth/login/LoginScreen';
import { SignUpScreen } from '@/screens/auth/signUp/SignUpScreen';
import { RootStackParamList } from '@/navigation/type';
import { HomeScreen } from '@/screens/home/HomeScreen';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { Loader } from '@/utils/Loader';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { setAuthMe, user, isLoading } = useSignInStore();

  useEffect(() => {
    setAuthMe();
  }, []);

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
