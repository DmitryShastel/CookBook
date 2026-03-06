import { View, Alert } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import {
  LoginFormData,
  loginValidationSchema,
} from '@/features/auth/model/lib/LoginValidation';
import { styles } from '@/features/auth/ui/loginForm/LoginForm.styles';
import { LoginFormProps } from '@/features/auth/model/types/LoginForm';

export const LoginForm = ({
  onSubmit,
  onForgotPassword,
  onSignUp,
}: LoginFormProps) => {
  const handleSubmit = async (values: LoginFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        console.log('Login values:', values);
        Alert.alert('Success', 'You are logged in successfully');
      }
    } catch (error) {
      Alert.alert('Error', 'Could not log in');
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
          />

          {onForgotPassword && (
            <Button
              title="Forgot Password?"
              type="clear"
              onPress={onForgotPassword}
              titleStyle={styles.forgotPassword}
              containerStyle={styles.forgotPasswordContainer}
            />
          )}

          <Button
            title="Login"
            onPress={handleSubmit}
            disabled={!isValid}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            disabledStyle={styles.buttonDisabled}
            disabledTitleStyle={styles.buttonText}
            containerStyle={styles.buttonContainer}
          />

          {onSignUp && (
            <Button
              title="Don't have an account? Sign Up"
              type="clear"
              onPress={onSignUp}
              titleStyle={styles.signUp}
              containerStyle={styles.signUpContainer}
            />
          )}
        </View>
      )}
    </Formik>
  );
};
