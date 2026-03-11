import { View } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import { Formik } from 'formik';
import {
  SignUpFormData,
  signUpValidationSchema,
} from '@/features/auth/model/lib/SignUpValidation';
import { SignUpFormProps } from '@/features/auth/model/types/SignUpForm';
import { styles } from '@/features/auth/ui/signUpForm/SignUpForm.styles';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../../../../firebase-config';

export const SignUpForm = ({ onSubmit, onLogin }: SignUpFormProps) => {
  const handleSubmit = async (values: SignUpFormData) => {
    try {
      if (onSubmit) {
        // (await onSubmit?.(values)) ?? console.log('Sign up values:', values);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password,
        );
        const user = userCredential.user;
        console.log(user.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      validationSchema={signUpValidationSchema}
      initialValues={{
        // name: '',
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
          {/*<Input*/}
          {/*  placeholder="Full Name"*/}
          {/*  leftIcon={*/}
          {/*    <Icon*/}
          {/*      name="person-outline"*/}
          {/*      type="ionicon"*/}
          {/*      size={22}*/}
          {/*      color="#666"*/}
          {/*    />*/}
          {/*  }*/}
          {/*  leftIconContainerStyle={styles.iconContainer}*/}
          {/*  onChangeText={handleChange('name')}*/}
          {/*  onBlur={handleBlur('name')}*/}
          {/*  value={values.name}*/}
          {/*  errorMessage={touched.name && errors.name ? errors.name : ''}*/}
          {/*  errorStyle={styles.errorText}*/}
          {/*  inputContainerStyle={styles.inputContainer}*/}
          {/*  inputStyle={styles.input}*/}
          {/*  containerStyle={styles.inputWrapper}*/}
          {/*/>*/}

          <Input
            placeholder="Email"
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
            placeholder="Password"
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
            placeholder="Confirm Password"
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
            title="Create Account"
            onPress={handleSubmit}
            disabled={!isValid || !dirty}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            disabledStyle={styles.buttonDisabled}
            disabledTitleStyle={styles.buttonText}
            containerStyle={styles.buttonContainer}
          />

          {onLogin && (
            <Button
              title="Already have an account? Sign In"
              type="clear"
              onPress={onLogin}
              titleStyle={styles.loginText}
              containerStyle={styles.loginContainer}
            />
          )}
        </View>
      )}
    </Formik>
  );
};
