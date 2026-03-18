import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SignUpForm } from '@/features/auth/ui/signUpForm/SignUpForm';
import { styles } from '@/screens/auth/signUp/SignUpScreen.styles';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useTranslation } from 'react-i18next';

export const SignUpScreen = () => {
  const { colors } = useThemeToggle();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background.primary }]}
    >
      <Image containerStyle={styles.logoContainer} resizeMode="contain" />

      <Text style={[styles.title, { color: colors.text.primary }]} h1>
        Create Account
      </Text>
      <Text style={[styles.subtitle, { color: colors.text.primary }]}>
        Sign up to get started
      </Text>

      <SignUpForm />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="EN" onPress={() => changeLanguage('en')} type="clear" />
        <Button title="FR" onPress={() => changeLanguage('fr')} type="clear" />
      </View>
    </View>
  );
};
