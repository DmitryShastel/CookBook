import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2089dc',
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonContainer: {
    gap: 16,
    paddingBottom: 30,
    paddingHorizontal: 40,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    color: '#666',
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
});
