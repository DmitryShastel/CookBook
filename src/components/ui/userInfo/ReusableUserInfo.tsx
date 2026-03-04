import { Image, Text, View } from 'react-native';
import { styles } from '@/components/ui/userInfo/ReusableUserInfo.style';
import { UserInfoProps } from '@/components/ui/userInfo/ReusableUserInfo.types';

export const ReusableUserInfo = ({ userName, userAvatar }: UserInfoProps) => {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: userAvatar }} style={styles.avatar} />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};
