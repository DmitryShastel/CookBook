import { StyleSheet } from 'react-native';
import { spacing } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.margin.sn,
    marginVertical: spacing.margin.sn,
    paddingHorizontal: spacing.padding.x,
    width: 'auto',
  },
  input: {
    color: '#000',
    fontSize: 16,
    padding: 10,
  },
  inputContainer: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
  },
});
