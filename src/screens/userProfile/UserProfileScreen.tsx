import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { UserProfile } from '@/features/userProfile/ui/UserProfile';
import { styles } from '@/screens/userProfile/UserProfileScreen.styles';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';
import { useSignOut } from '@/features/auth/hooks/signOut/useSignOut';

export const UserProfileScreen = () => {
  const { getBack } = useNavigationHelper();
  const { handleLogout } = useSignOut();

  return (
    <RootPage title="Profile" showBackButton={true} onBackPress={getBack}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <UserProfile
          userName="John Doe"
          userEmail="john.doe@example.com"
          userAvatar="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"
          onLogout={handleLogout}
        />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Account Information</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Member since</Text>
            <Text style={styles.infoValue}>January 2024</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Recipes created</Text>
            <Text style={styles.infoValue}>12</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Saved recipes</Text>
            <Text style={styles.infoValue}>8</Text>
          </View>
        </View>
      </ScrollView>
    </RootPage>
  );
};
