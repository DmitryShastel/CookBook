import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { styles } from '@/screens/home/HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@/screens/rootPage/type';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
  const { colors } = useThemeToggle();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation();

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <View style={styles.content}>
        <Icon name="account-circle" size={100} color={colors.primary.main} />

        <Text style={styles.message}>{t('HomeScreen.message')}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={t('HomeScreen.signIn')}
          onPress={handleSignIn}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />

        <Button
          title={t('HomeScreen.signUp')}
          onPress={handleSignUp}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};
