import React, { ReactNode } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import { styles } from '@/screens/rootPage/RootPage.styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/src';
import { RootStackParamList } from '@/navigation/RootNavigator';
import { useNavigation } from '@react-navigation/native/src';

interface RootScreenProps {
  children: ReactNode;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  activeTab?: 'home' | 'settings' | 'profile';
  onTabPress?: (tab: 'home' | 'settings' | 'profile') => void;
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;

export const RootPage = ({
  children,
  // title = 'Home',
  showBackButton = false,
  onBackPress,
  activeTab = 'home',
  onTabPress,
}: RootScreenProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
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
              name={activeTab === 'settings' ? 'settings' : 'settings-outline'}
              type="ionicon"
              size={24}
              color={activeTab === 'settings' ? '#1E90FF' : '#999'}
            />
          }
          // onPress={() => onTabPress?.('settings')}
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
    </SafeAreaView>
  );
};
