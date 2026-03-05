import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootPage } from '@/screens/rootPage/RootPage';
import { SettingsScreen } from '@/screens/settings/SettingsScreen';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ state, navigation }) => {
        const activeTab = state.routes[state.index].name.toLowerCase() as
          | 'home'
          | 'settings'
          | 'profile';

        return (
          <RootPage
            activeTab={activeTab}
            onTabPress={(tab) => {
              navigation.navigate(tab.charAt(0).toUpperCase() + tab.slice(1));
            }}
            showBackButton={false}
            hideTabs={false}
          ></RootPage>
        );
      }}
    >
      <Tab.Screen name="Home" component={() => {}} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
};
