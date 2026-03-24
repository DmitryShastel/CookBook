import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Settings } from '@/features/settings/ui/Settings';
import { styles } from '@/screens/settings/SettingsScreen.styles';
import { RootPage } from '@/screens/rootPage/RootPage';
import { useNavigationHelper } from '@/hooks/useNavigationHelper';
import { useTranslation } from 'react-i18next';
import { useAnimatedScreen } from '@/shared/reanimated/hooks/useAnimatedScreen';
import Animated from 'react-native-reanimated';

export const SettingsScreen = () => {
  const { getBack } = useNavigationHelper();
  const { t } = useTranslation();
  const { animatedStyle } = useAnimatedScreen();

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
