import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: border.radius.md,
    height: 50,
  },
  buttonContainer: {
    marginBottom: spacing.margin.mmd,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#1E90FF',
    opacity: opacity.disabled,
  },
  buttonText: {
    color: '#fff',
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
  },
  container: {
    marginBottom: spacing.margin.mdd,
    paddingHorizontal: spacing.padding.mdd,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: typography.accent.md,
    marginTop: 2,
  },
  forgotPassword: {
    color: '#1E90FF',
    fontSize: typography.accent.sm,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: spacing.margin.mdd,
    marginTop: -10,
  },
  iconContainer: {
    marginRight: spacing.margin.ssm,
  },
  input: {
    fontSize: typography.accent.md,
    paddingVertical: 0,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: border.radius.s,
    borderRadius: border.radius.md,
    height: 50,
    paddingHorizontal: spacing.padding.sn,
  },
  inputWrapper: {
    marginBottom: spacing.margin.lg,
    paddingHorizontal: spacing.padding.x,
  },
  signUp: {
    color: '#1E90FF',
    fontSize: typography.accent.md,
  },
  signUpContainer: {
    marginTop: spacing.margin.ssm,
  },
});
