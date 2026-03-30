import { View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import {
  SignUpFormData,
  signUpValidationSchema,
} from '@/features/auth/model/lib/SignUpValidation';
import { styles } from '@/features/auth/ui/signUpForm/SignUpForm.styles';
import { useSignUp } from '@/features/auth/hooks/signUp/useSignUp';
import { useNavigation } from '@react-navigation/native/src';
import { useTranslation } from 'react-i18next';
import { useAnimatedButton } from '@/shared/reanimated/hooks/useAnimatedButton';
import Animated from 'react-native-reanimated';
import { Input } from '@/components/input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import { Button } from '@/components/button/Button';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();
  const { signUp, isLoading } = useSignUp();
  const handleSubmit = async (values: SignUpFormData) => {
    await signUp(values.email, values.password);
  };
  const { t } = useTranslation();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedButton();

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
            placeholder={t('SignUpScreen.placeholderPassword')}
            leftIcon={
              <Icon
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={25}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
            leftIconContainerStyle={styles.iconContainer}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={!showPassword}
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
                name={showConfirmPassword ? 'visibility-off' : 'visibility'}
                size={25}
                onPress={() => setShowConfirmPassword((prev) => !prev)}
              />
            }
            leftIconContainerStyle={styles.iconContainer}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry={!showConfirmPassword}
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

          <Animated.View style={animatedStyle}>
            <Button
              title={t('SignUpScreen.buttonSignUp')}
              onPress={handleSubmit}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              disabled={!isValid || isLoading}
              loading={isLoading}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              disabledStyle={styles.buttonDisabled}
              disabledTitleStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </Animated.View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginContainer}
            disabled={isLoading}
            activeOpacity={0.6}
          >
            <Text style={styles.loginText}>
              {t('SignUpScreen.referenceSignIn')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
