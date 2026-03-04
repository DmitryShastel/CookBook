import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 10,
    marginTop: -15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#1E90FF',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  signUp: {
    color: '#000',
  },
  signUpLink: {
    color: '#1E90FF',
    fontWeight: '600',
  },
});
