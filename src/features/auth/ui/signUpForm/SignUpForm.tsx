import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import {
  SignUpFormData,
  signUpValidationSchema,
} from '@/features/auth/model/lib/SignUpValidation';

interface SignUpFormProps {
  onSubmit?: (values: SignUpFormData) => void;
  onLogin?: () => void;
}

export const SignUpForm = ({ onSubmit, onLogin }: SignUpFormProps) => {
  const handleSubmit = async (values: SignUpFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        console.log('Sign up values:', values);
        Alert.alert('Success', 'Account created successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create account');
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
          {/* Name Input */}
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

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Confirm Password Input */}
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

          {/* Sign Up Button */}
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

          {/* Login Link */}
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 20,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#87CEEB',
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    width: '100%',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: '#ff4444',
    fontSize: 12,
    marginBottom: 15,
    marginLeft: 5,
  },
  icon: {
    color: '#666',
    marginRight: 10,
  },
  input: {
    color: '#333',
    flex: 1,
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    marginBottom: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  loginLink: {
    color: '#1E90FF',
    fontWeight: '600',
  },
  loginText: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});
