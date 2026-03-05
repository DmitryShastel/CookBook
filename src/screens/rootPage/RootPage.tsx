import { SafeAreaView, StatusBar, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { styles } from '@/screens/rootPage/RootPage.styles';
import { useNavigation } from '@react-navigation/native/src';
import {
  HomeScreenNavigationProp,
  RootScreenProps,
} from '@/screens/rootPage/type';

export const RootPage = ({
  children,
  // title = 'Home',
  showBackButton = false,
  onBackPress,
  activeTab = 'home',
  onTabPress,
  hideTabs = false,
}: RootScreenProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleProfile = () => {
    navigation.navigate('MainTabs', { screen: 'Profile' });
  };

  const handleSettings = () => {
    navigation.navigate('MainTabs', { screen: 'Settings' });
  };

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
          {/*{title}*/}
        </Text>

        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>{children}</View>
      {!hideTabs && (
        <View style={styles.tabBar}>
          <Button
            type="clear"
            icon={
              <Icon
                name={activeTab === 'home' ? 'home' : 'home-outline'}
                type="ionicon"
                size={24}
                color={activeTab === 'home' ? '#1E90FF' : '#999'}
              />
            }
            onPress={() => onTabPress?.('home')}
            buttonStyle={styles.tabButton}
          />

          <Button
            type="clear"
            icon={
              <Icon
                name={
                  activeTab === 'settings' ? 'settings' : 'settings-outline'
                }
                type="ionicon"
                size={24}
                color={activeTab === 'settings' ? '#1E90FF' : '#999'}
              />
            }
            onPress={handleSettings}
            buttonStyle={styles.tabButton}
          />

          <Button
            type="clear"
            icon={
              <Icon
                name={activeTab === 'profile' ? 'person' : 'person-outline'}
                type="ionicon"
                size={24}
                color={activeTab === 'profile' ? '#1E90FF' : '#999'}
              />
            }
            onPress={handleProfile}
            buttonStyle={styles.tabButton}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
