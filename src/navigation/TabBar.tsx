import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '@/navigation/Tab.styles';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { colors, theme } = useThemeToggle();
  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  const getIconName = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Main':
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
    <View
      style={[
        styles.tabBar,
        {
          backgroundColor: colors.card?.background || colors.surface,

          borderTopColor: colors.card?.border || colors.border,
          borderTopWidth: theme === 'dark' ? 1 : 0,

          shadowColor: theme === 'dark' ? '#000' : '#666',
        },
      ]}
    >
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
              color={isFocused ? colors.primary.main : colors.text.secondary}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
