import { View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';
import { styles } from '@/components/ui/userInfo/UserInfo.style';
import { UserInfoProps } from '@/components/ui/userInfo/UserInfo.types';

export const UserInfo = ({ userName, userAvatar }: UserInfoProps) => {
  return (
    <View style={styles.userContainer}>
      <Avatar
        source={{ uri: userAvatar }}
        size={40}
        rounded
        containerStyle={styles.avatar}
      />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};
