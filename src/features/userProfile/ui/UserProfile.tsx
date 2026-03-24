import { View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { UserInfo } from '@/components/ui/userInfo/UserInfo';
import { styles } from '@/features/userProfile/ui/UserProfiler.styles';
import { UserProfileProps } from '@/features/userProfile/model/types/UserProfile';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';
import { useAnimatedButton } from '@/shared/reanimated/hooks/useAnimatedButton';
import Animated from 'react-native-reanimated';

export const UserProfile = ({
  userName,
  userAvatar,
  userEmail,
  onLogout,
}: UserProfileProps) => {
  const { colors } = useThemeToggle();
  const { t } = useTranslation();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedButton();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <View style={styles.userInfoSection}>
        <UserInfo userName={userName} userAvatar={userAvatar} />

        <View style={styles.emailContainer}>
          <Icon
            name="mail-outline"
            type="ionicon"
            size={20}
            color={colors.text.secondary}
          />
          <Text style={[styles.emailText, { color: colors.text.secondary }]}>
            {userEmail}
          </Text>
        </View>
      </View>

      <Animated.View style={animatedStyle}>
        <Button
          title={t('UserProfileScreen.logoutTitle')}
          onPress={onLogout}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          icon={
            <Icon
              name="log-out-outline"
              type="ionicon"
              size={22}
              color={colors.text.inverse}
            />
          }
          iconContainerStyle={styles.logoutIcon}
          buttonStyle={[styles.logoutButton, { backgroundColor: colors.error }]}
          titleStyle={[styles.logoutText, { color: colors.text.inverse }]}
          activeOpacity={0.7}
        />
      </Animated.View>
    </View>
  );
};
