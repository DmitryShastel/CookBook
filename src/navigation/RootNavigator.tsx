import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from '@/navigation/MainTabNavigator';
import { LoginScreen } from '@/screens/auth/login/LoginScreen';
import { SignUpScreen } from '@/screens/auth/signUp/SignUpScreen';
import { RootStackParamList } from '@/navigation/type';
import { useState } from 'react';
import { HomeScreen } from '@/screens/home/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  //fake sigIn/signOut
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Home">
            {() => <HomeScreen onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp">
            {() => <SignUpScreen onSignUp={handleLogin} />}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name="MainTabs">
          {() => <MainTabNavigator onLogout={handleLogout} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
