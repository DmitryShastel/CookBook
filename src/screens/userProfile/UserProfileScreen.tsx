import { View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { UserProfile } from '@/features/userProfile/ui/UserProfile';
import { styles } from '@/screens/userProfile/UserProfileScreen.styles';

export const UserProfileScreen = () => {
  const handleLogout = () => {
    console.log('Logout pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

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
    </SafeAreaView>
  );
};
