import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import {
  LoginFormData,
  loginValidationSchema,
} from '@/features/auth/model/lib/LoginValidation';
import { styles } from '@/features/auth/ui/loginForm/LoginForm.styles';
import { useLogin } from '@/features/auth/hooks/login/useLogin';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useAnimatedButton } from '@/shared/reanimated/hooks/useAnimatedButton';
import Animated from 'react-native-reanimated';
import { Button } from '@/components/ui/button/Button';
import { Input } from '@/components/ui/input/Input';
import { useState } from 'react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const { login, isLoading } = useLogin();
  const handleSubmit = async (values: LoginFormData) => {
    await login(values.email, values.password);
  };
  const { t } = useTranslation();
  const { animatedStyle, onPressIn, onPressOut } = useAnimatedButton();

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
            placeholder={t('LoginScreen.placeholderEmail')}
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
            disabled={isLoading}
          />

          <Input
            placeholder={t('LoginScreen.placeholderPassword')}
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
            disabled={isLoading}
          />

          <TouchableOpacity
            onPress={() => {}}
            style={styles.forgotPasswordContainer}
            disabled={isLoading}
            activeOpacity={0.6}
          >
            <Text style={styles.forgotPassword}>
              {t('LoginScreen.forgotPassword')}
            </Text>
          </TouchableOpacity>

          <Animated.View style={animatedStyle}>
            <Button
              title={t('LoginScreen.buttonLogin')}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              onPress={handleSubmit}
              disabled={!isValid || isLoading}
              isLoading={isLoading}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              disabledStyle={styles.buttonDisabled}
              disabledTitleStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </Animated.View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.signUpContainer}
            disabled={isLoading}
            activeOpacity={0.6}
          >
            <Text style={styles.signUp}>
              {t('LoginScreen.referenceSignUp')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
