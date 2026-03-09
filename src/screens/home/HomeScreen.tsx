// import { View, Text } from 'react-native';
// import { Button, Icon } from 'react-native-elements';
// import { styles } from '@/screens/home/HomeScreen.styles';
//
// export const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <Icon name="account-circle" size={100} color="#2089dc" />
//
//         <Text style={styles.message}>
//           Please sign in or create an account to start using the app
//         </Text>
//       </View>
//
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Sign In"
//           onPress={() => {}}
//           buttonStyle={styles.button}
//           titleStyle={styles.buttonTitle}
//         />
//
//         <Button
//           title="Sign Up"
//           onPress={() => {}}
//           buttonStyle={styles.button}
//           titleStyle={styles.buttonTitle}
//         />
//       </View>
//     </View>
//   );
// };

import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { styles } from '@/screens/home/HomeScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@/screens/rootPage/type';

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

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
          onPress={handleSignIn}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />

        <Button
          title="Sign Up"
          onPress={handleSignUp}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};
