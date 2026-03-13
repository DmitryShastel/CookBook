import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { Formik } from 'formik';
import {
  LoginFormData,
  loginValidationSchema,
} from '@/features/auth/model/lib/LoginValidation';
import { styles } from '@/features/auth/ui/loginForm/LoginForm.styles';
import { useLogin } from '@/features/auth/hooks/login/useLogin';

export const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const handleSubmit = async (values: LoginFormData) => {
    await login(values.email, values.password);
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
