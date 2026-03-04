import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
