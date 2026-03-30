import { ScrollView, View, Text } from 'react-native';
import { Settings } from '@/features/settings/ui/Settings';
import { styles } from '@/entities/settings/SettingsScreen.styles';
import { RootPage } from '@/pages/rootPage/RootPage';
import { useTranslation } from 'react-i18next';
import { useAnimatedScreen } from '@/shared/reanimated/hooks/useAnimatedScreen';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  const { animatedStyle } = useAnimatedScreen();
  const navigation = useNavigation();

  const getBack = () => {
    navigation.goBack();
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <RootPage
        title={t('SettingsScreen.title')}
        showBackButton={true}
        onBackPress={getBack}
      >
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Settings />

          <View style={styles.footer}>
            <Text style={styles.version}>Version 1.0.0</Text>
          </View>
        </ScrollView>
      </RootPage>
    </Animated.View>
  );
};
