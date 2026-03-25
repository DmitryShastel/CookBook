import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '@/screens/rootPage/RootPage.styles';
import { RootScreenProps } from '@/screens/rootPage/type';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useAnimatedScreen } from '@/shared/reanimated/hooks/useAnimatedScreen';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const RootPage = ({
  children,
  title,
  showBackButton,
  onBackPress,
}: RootScreenProps) => {
  const { colors } = useThemeToggle();
  const { animatedOut } = useAnimatedScreen();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background.primary }]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background.primary}
      />

      <View
        style={[styles.header, { backgroundColor: colors.background.primary }]}
      >
        <Animated.View style={animatedOut}>
          {showBackButton && (
            <TouchableOpacity
              onPress={onBackPress}
              style={styles.backButton}
              activeOpacity={0.7}
            >
              <Icon name="arrow-back" size={24} color={colors.text.primary} />
            </TouchableOpacity>
          )}
        </Animated.View>

        <Text style={[styles.headerTitle, { color: colors.text.primary }]} h4>
          {title}
        </Text>

        <View style={styles.headerRight} />
      </View>

      <View
        style={[
          styles.content,
          { backgroundColor: colors.background.tertiary },
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};
