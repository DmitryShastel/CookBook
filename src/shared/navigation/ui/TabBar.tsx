import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '@/shared/navigation/ui/Tab.styles';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GetTabIconName } from '@/shared/navigation/lib/getTabIconName';

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { colors, theme } = useThemeToggle();
  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
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
            <Ionicons
              name={GetTabIconName(route.name, isFocused)}
              size={24}
              color={isFocused ? colors.primary.main : colors.text.secondary}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
