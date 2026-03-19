import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { UserProfile } from '@/features/userProfile/ui/UserProfile';
import { styles } from '@/screens/userProfile/UserProfileScreen.styles';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';
import { useSignOut } from '@/features/auth/hooks/signOut/useSignOut';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const UserProfileScreen = () => {
  const { getBack } = useNavigationHelper();
  const { handleLogout } = useSignOut();
  const { colors } = useThemeToggle();

  const { t } = useTranslation();

  return (
    <RootPage
      title={t('UserProfileScreen.title')}
      showBackButton={true}
      onBackPress={getBack}
    >
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: colors.background.tertiary },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <UserProfile
          userName="John Doe"
          userEmail="john.doe@example.com"
          userAvatar="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211471.png"
          onLogout={handleLogout}
        />

        <View
          style={[
            styles.infoCard,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.infoTitle, { color: colors.text.secondary }]}>
            {t('UserProfileScreen.accountInformation')}
          </Text>

          <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.text.secondary }]}>
              {t('UserProfileScreen.memberSince')}
            </Text>
            <Text style={[styles.infoValue, { color: colors.text.primary }]}>
              January 2024
            </Text>
          </View>

          <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.text.secondary }]}>
              {t('UserProfileScreen.recipeCreated')}
            </Text>
            <Text style={[styles.infoValue, { color: colors.text.primary }]}>
              12
            </Text>
          </View>

          <View style={[styles.infoRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.infoLabel, { color: colors.text.secondary }]}>
              {t('UserProfileScreen.savedRecipes')}
            </Text>
            <Text style={[styles.infoValue, { color: colors.text.primary }]}>
              8
            </Text>
          </View>
        </View>
      </ScrollView>
    </RootPage>
  );
};
