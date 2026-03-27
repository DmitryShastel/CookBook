import { Pressable, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './SettingsItem.styles';
import { SettingItemInterface } from './SettingsItem.types';
import { useThemeToggle } from '@/features/theme/hooks/useThemeToggle';

export const SettingItem = ({
  icon,
  iconBgColor,
  iconColor,
  title,
  value,
  onPress,
}: SettingItemInterface) => {
  const { colors } = useThemeToggle();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.settingItem,
        {
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
        },
      ]}
    >
      <View style={styles.leftContainer}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          <Icon name={icon} size={22} color={iconColor} />
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: colors.text.primary }]}>
            {title}
          </Text>

          {value ? (
            <Text style={[styles.value, { color: colors.text.secondary }]}>
              {value}
            </Text>
          ) : null}
        </View>
      </View>

      <Icon
        name="chevron-right"
        size={20}
        color={colors.text.secondary}
        style={styles.chevron}
      />
    </Pressable>
  );
};
