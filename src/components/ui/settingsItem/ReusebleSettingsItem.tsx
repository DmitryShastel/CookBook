import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
  <TouchableOpacity
    style={styles.settingItem}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={styles.leftContainer}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        <Icon name={icon} size={22} color={iconColor} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
    <Icon name="chevron-forward-outline" size={20} color="#999" />
  </TouchableOpacity>
);
