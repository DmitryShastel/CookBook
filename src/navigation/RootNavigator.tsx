import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from '@/navigation/MainTabNavigator';
import { LoginScreen } from '@/screens/auth/login/LoginScreen';
import { SignUpScreen } from '@/screens/auth/signUp/SignUpScreen';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabNavigator} />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Profile" component={UserProfileScreen} />
    </Stack.Navigator>
  );
};
