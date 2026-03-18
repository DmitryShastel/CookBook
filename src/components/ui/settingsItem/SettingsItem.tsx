import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { styles } from '@/components/ui/settingsItem/SettingsItem.styles';
import { SettingItemProps } from '@/components/ui/settingsItem/SettingsItem.types';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const SettingItem = ({
  icon,
  iconBgColor,
  iconColor,
  title,
  value,
  onPress,
}: SettingItemProps) => {
  const { colors } = useThemeToggle();
  return (
    <ListItem
      Component={ListItem}
      onPress={onPress}
      containerStyle={[
        styles.settingItem,
        {
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
        },
      ]}
      pad={18}
      activeOpacity={1}
    >
      <View style={styles.leftContainer}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <Icon name={icon} type="ionicon" size={22} color={iconColor} />
        </View>
        <ListItem.Content
          style={[styles.title, { color: colors.text.primary }]}
        >
          <ListItem.Title
            style={[styles.title, { color: colors.text.primary }]}
          >
            {title}
          </ListItem.Title>
          <ListItem.Subtitle
            style={[styles.value, { color: colors.text.secondary }]}
          >
            {value}
          </ListItem.Subtitle>
        </ListItem.Content>
      </View>
      <ListItem.Chevron size={20} color={colors.text.secondary} />
    </ListItem>
  );
};
