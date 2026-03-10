import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';
import { SettingsScreen } from '@/screens/settings/SettingsScreen';
import { TabBar } from '@/navigation/TabBar';
import { HomeStack } from '@/navigation/HomeStack';
import { CategoryScreen } from '@/screens/category/CategoryScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      {/*<Tab.Screen name="Main" component={HomeStack} />*/}
      <Tab.Screen name="Main" component={CategoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};
