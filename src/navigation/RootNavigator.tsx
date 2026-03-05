import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootPage } from '@/screens/rootPage/RootPage';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={RootPage} />
      {/*<Stack.Screen name="profile" component={UserProfileScreen} />*/}
    </Stack.Navigator>
  );
}
