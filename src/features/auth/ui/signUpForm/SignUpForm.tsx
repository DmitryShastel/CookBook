import { View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { Formik } from 'formik';
import {
  SignUpFormData,
  signUpValidationSchema,
} from '@/features/auth/model/lib/SignUpValidation';
import { styles } from '@/features/auth/ui/signUpForm/SignUpForm.styles';
import { useSignUp } from '@/features/auth/hooks/signUp/useSignUp';
import { useNavigation } from '@react-navigation/native/src';
import { useTranslation } from 'react-i18next';

export const SignUpForm = () => {
  const navigation = useNavigation();
  const { signUp, isLoading } = useSignUp();
  const handleSubmit = async (values: SignUpFormData) => {
    await signUp(values.email, values.password);
  };
  const { t } = useTranslation();

  return (
    <Formik
      validationSchema={signUpValidationSchema}
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
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
            placeholder={t('SignUpScreen.placeholderEmail')}
            leftIcon={
              <Icon name="mail-outline" type="ionicon" size={22} color="#666" />
            }
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
            placeholder={t('SignUpScreen.placeholderPassword')}
            leftIcon={
              <Icon
                name="lock-closed-outline"
                type="ionicon"
                size={22}
                color="#666"
              />
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

          <Input
            placeholder={t('SignUpScreen.placeholderConfirmPassword')}
            leftIcon={
              <Icon
                name="lock-closed-outline"
                type="ionicon"
                size={22}
                color="#666"
              />
            }
            leftIconContainerStyle={styles.iconContainer}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
            autoCapitalize="none"
            errorMessage={
              touched.confirmPassword && errors.confirmPassword
                ? errors.confirmPassword
                : ''
            }
            errorStyle={styles.errorText}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.input}
            containerStyle={styles.inputWrapper}
          />

          <Button
            title={t('SignUpScreen.buttonSignUp')}
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
            title={t('SignUpScreen.referenceSignIn')}
            type="clear"
            onPress={() => navigation.navigate('Login')}
            titleStyle={styles.loginText}
            containerStyle={styles.loginContainer}
          />
        </View>
      )}
    </Formik>
  );
};
