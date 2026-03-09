import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '@/navigation/Tab.styles';

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const getIconName = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Home':
        return isFocused ? 'home' : 'home-outline';
      case 'Settings':
        return isFocused ? 'settings' : 'settings-outline';
      case 'Profile':
        return isFocused ? 'person' : 'person-outline';
      default:
        return 'home-outline';
    }
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => handleTabPress(route.name)}
            style={styles.tabButton}
          >
            <Icon
              name={getIconName(route.name, isFocused)}
              type="ionicon"
              size={24}
              color={isFocused ? '#1E90FF' : '#999'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
