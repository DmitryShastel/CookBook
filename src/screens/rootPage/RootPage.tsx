import { SafeAreaView, StatusBar, View } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { styles } from '@/screens/rootPage/RootPage.styles';
import { RootScreenProps } from '@/screens/rootPage/type';

export const RootPage = ({
  children,
  title,
  showBackButton = false,
  onBackPress,
}: RootScreenProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {showBackButton && (
            <Button
              type="clear"
              icon={
                <Icon name="arrow-back" type="ionicon" size={24} color="#333" />
              }
              onPress={onBackPress}
              buttonStyle={styles.backButton}
            />
          )}
        </View>

        <Text style={styles.headerTitle} h4>
          {title}
        </Text>

        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
