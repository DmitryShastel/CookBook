import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    height: 50,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#1E90FF',
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    paddingHorizontal: 20,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
  forgotPassword: {
    color: '#1E90FF',
    fontSize: 14,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: -10,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    paddingVertical: 0,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 0,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    marginBottom: 15,
    paddingHorizontal: 0,
  },
  signUp: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
  },
  signUpContainer: {
    marginTop: 10,
  },
});
