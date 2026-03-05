import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootPage } from '@/screens/rootPage/RootPage';
import { createStaticNavigation } from '@react-navigation/native';
import { UserProfileScreen } from '@/screens/userProfile/UserProfileScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    RootPage: RootPage,
    Profile: UserProfileScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
