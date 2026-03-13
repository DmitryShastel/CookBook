import { Alert, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { Formik } from 'formik';
import {
  LoginFormData,
  loginValidationSchema,
} from '@/features/auth/model/lib/LoginValidation';
import { styles } from '@/features/auth/ui/loginForm/LoginForm.styles';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../../../../firebase-config';
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values: LoginFormData) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      showMessage({
        message: 'Welcome Back!',
        description: 'You have successfully logged in',
        type: 'success',
        duration: 3000,
      });
    } catch (error: any) {
      let errorMessage = '';

      switch (error.code) {
        case 'auth/invalid-credential':
          errorMessage = 'Invalid email or password';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Try again later';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Check your connection';
          break;
        default:
          errorMessage = 'Could not log in. Please try again';
      }
      showMessage({
        message: 'Login Failed',
        description: errorMessage,
        type: 'danger',
        duration: 3000,
      });
      setIsLoading(false);
    }
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.container}>
          <Input
            placeholder="Email"
            leftIcon={<Icon name="mail-outline" type="ionicon" size={25} />}
            leftIconContainerStyle={styles.iconContainer}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
            errorMessage={touched.email && errors.email ? errors.email : ''}
            errorStyle={styles.errorText}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            disabled={isLoading}
          />

          <Input
            placeholder="Password"
            leftIcon={
              <Icon name="lock-closed-outline" type="ionicon" size={25} />
            }
            leftIconContainerStyle={styles.iconContainer}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            autoCapitalize="none"
            errorMessage={
              touched.password && errors.password ? errors.password : ''
            }
            errorStyle={styles.errorText}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
            disabled={isLoading}
          />

          <Button
            title="Forgot Password?"
            type="clear"
            onPress={() => {}}
            titleStyle={styles.forgotPassword}
            containerStyle={styles.forgotPasswordContainer}
            disabled={isLoading}
          />

          <Button
            title="Login"
            onPress={handleSubmit}
            disabled={!isValid || isLoading}
            loading={isLoading}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            disabledStyle={styles.buttonDisabled}
            disabledTitleStyle={styles.buttonText}
            containerStyle={styles.buttonContainer}
          />

          <Button
            title="Don't have an account? Sign Up"
            type="clear"
            onPress={() => {}}
            titleStyle={styles.signUp}
            containerStyle={styles.signUpContainer}
          />
        </View>
      )}
    </Formik>
  );
};
