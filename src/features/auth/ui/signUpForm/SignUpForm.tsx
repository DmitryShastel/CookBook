import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import {
  SignUpFormData,
  signUpValidationSchema,
} from '@/features/auth/model/lib/SignUpValidation';
import { SignUpFormProps } from '@/features/auth/model/types/SignUpForm';
import { styles } from '@/features/auth/ui/signUpForm/SignUpForm.styles';

export const SignUpForm = ({ onSubmit, onLogin }: SignUpFormProps) => {
  const handleSubmit = async (values: SignUpFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        console.log('Sign up values:', values);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      validationSchema={signUpValidationSchema}
      initialValues={{
        name: '',
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
        dirty,
      }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon name="person-outline" size={22} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </View>
          {errors.name && touched.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon name="mail-outline" size={22} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={22} style={styles.icon} />
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

          <View style={styles.inputContainer}>
            <Icon name="lock-closed-outline" size={22} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
          </View>
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              (!isValid || !dirty) && styles.buttonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={!isValid || !dirty}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          {onLogin && (
            <TouchableOpacity onPress={onLogin}>
              <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={styles.loginLink}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </Formik>
  );
};
