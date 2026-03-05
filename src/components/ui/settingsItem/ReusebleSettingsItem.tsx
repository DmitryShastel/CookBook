import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { styles } from '@/components/ui/settingsItem/ReusebleSettingsItem.styles';
import { SettingItemProps } from '@/components/ui/settingsItem/ReusebleSettingsItem.types';

export const ReusableSettingItem = ({
  icon,
  iconBgColor,
  iconColor,
  title,
  value,
  onPress,
}: SettingItemProps) => (
  <ListItem
    Component={ListItem}
    onPress={onPress}
    containerStyle={styles.settingItem}
    pad={16}
    activeOpacity={0.7}
  >
    <View style={styles.leftContainer}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon name={icon} type="ionicon" size={22} color={iconColor} />
      </View>
      <ListItem.Content style={styles.textContainer}>
        <ListItem.Title style={styles.title}>{title}</ListItem.Title>
        <ListItem.Subtitle style={styles.value}>{value}</ListItem.Subtitle>
      </ListItem.Content>
    </View>
    <ListItem.Chevron size={20} color="#999" />
  </ListItem>
);
