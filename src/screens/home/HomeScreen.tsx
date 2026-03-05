import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { styles } from '@/screens/home/HomeScreen.styles';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="account-circle" size={100} color="#2089dc" />

        <Text style={styles.message}>
          Please sign in or create an account to start using the app
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          onPress={() => {}}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />

        <Button
          title="Sign Up"
          onPress={() => {}}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};
