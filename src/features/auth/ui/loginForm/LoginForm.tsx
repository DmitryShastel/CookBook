import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import {
  LoginFormData,
  loginValidationSchema,
} from '@/features/auth/model/lib/LoginValidation';
import { styles } from '@/features/auth/ui/loginForm/LoginForm.styles';
import { LoginFormProps } from '@/features/auth/model/types/loginForm';

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
        Alert.alert('Успех', 'Вы вошли в систему');
      }
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось войти');
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
        <>
          <View style={styles.inputContainer}>
            <Icon name="mail-outline" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>
          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {onForgotPassword && (
            <TouchableOpacity onPress={onForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.button, !isValid && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {onSignUp && (
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.signUp}>
                Don't have an account?{' '}
                <Text style={styles.signUpLink}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </Formik>
  );
};
