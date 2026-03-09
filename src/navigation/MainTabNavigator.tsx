import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootPage } from '@/screens/rootPage/RootPage';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';
import { View } from 'react-native';
import { RecipeList } from '@/features/recipeList/ui/RecipeList';
import { SettingsScreen } from '@/screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
        <Tab.Screen name="Home" component={RecipeList} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
      </Tab.Navigator>
    </View>
  );
};
