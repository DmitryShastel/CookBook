import { Image, Text, View } from 'react-native';
import { styles } from '@/components/userInfo/UserInfo.style';
import { UserInfoInterface } from '@/components/userInfo/UserInfo.types';

export const UserInfo = ({ userName, userAvatar }: UserInfoInterface) => {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: userAvatar }} style={styles.avatar} />
      <Text style={styles.userName}>{userName}</Text>
    </View>
  );
};
