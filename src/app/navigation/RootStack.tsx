import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from '@/app/navigation/MainTabNavigator';
import { LoginScreen } from '@/entities/auth/login/LoginScreen';
import { SignUpScreen } from '@/entities/auth/signUp/SignUpScreen';
import { RootStackParamList } from '@/shared/navigation/types/type';
import { HomeScreen } from '@/entities/home/HomeScreen';
import { useSignInStore } from '@/shared/stores/auth/useSignInStore';
import { Loader } from '@/components/loader/Loader';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { initAuth, user, isLoading } = useSignInStore();

  useEffect(() => {
    initAuth();
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
        <Stack.Screen name="MainTabs">{MainTabNavigator}</Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
