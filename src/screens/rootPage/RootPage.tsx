import { SafeAreaView, StatusBar, View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { styles } from '@/screens/rootPage/RootPage.styles';
import { RootScreenProps } from '@/screens/rootPage/type';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export const RootPage = ({
  children,
  title,
  showBackButton,
  onBackPress,
}: RootScreenProps) => {
  const { colors } = useThemeToggle();
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
        <View style={styles.headerLeft}>
          {showBackButton && (
            <Button
              type="clear"
              icon={
                <Icon
                  name="arrow-back"
                  type="ionicon"
                  size={24}
                  color={colors.text.primary}
                />
              }
              onPress={onBackPress}
              buttonStyle={styles.backButton}
            />
          )}
        </View>

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
