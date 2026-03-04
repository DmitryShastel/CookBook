import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ReusableUserInfo } from '@/components/ui/userInfo/ReusableUserInfo';
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
          <Icon name="mail-outline" size={20} color="#666" />
          <Text style={styles.emailText}>{userEmail}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={onLogout}
        activeOpacity={0.7}
      >
        <Icon name="log-out-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
