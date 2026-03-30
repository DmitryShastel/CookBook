import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserProfileScreen } from '@/entities/userProfile/UserProfileScreen';
import { SettingsScreen } from '@/entities/settings/SettingsScreen';
import { TabBar } from '@/shared/navigation/ui/TabBar';
import { HomeStack } from '@/app/navigation/HomeStack';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Main" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};
