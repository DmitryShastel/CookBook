import { View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { ReusableUserInfo } from '@/components/ui/userInfo/UserInfo';
import { styles } from '@/features/userProfile/ui/UserProfiler.styles';
import { UserProfileProps } from '@/features/userProfile/model/types/UserProfile';

export const UserProfile = ({
  userName,
  userAvatar,
  userEmail,
  onLogout,
}: UserProfileProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <ReusableUserInfo userName={userName} userAvatar={userAvatar} />

        <View style={styles.emailContainer}>
          <Icon name="mail-outline" type="ionicon" size={20} color="#666" />
          <Text style={styles.emailText}>{userEmail}</Text>
        </View>
      </View>

      <Button
        title="Logout"
        onPress={onLogout}
        icon={
          <Icon name="log-out-outline" type="ionicon" size={22} color="#fff" />
        }
        iconContainerStyle={styles.logoutIcon}
        buttonStyle={styles.logoutButton}
        titleStyle={styles.logoutText}
        activeOpacity={0.7}
      />
    </View>
  );
};
