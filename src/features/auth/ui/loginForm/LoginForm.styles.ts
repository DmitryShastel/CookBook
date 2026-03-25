import { StyleSheet } from 'react-native';
import {
  border,
  opacity,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.primary.main,
    borderRadius: border.radius.md,
    height: 50,
  },
  buttonContainer: {
    marginBottom: spacing.margin.mmd,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: palette.primary.dark,
    opacity: opacity.disabled,
  },
  buttonText: {
    fontSize: typography.accent.lg,
    fontWeight: typography.weight.semiBold,
  },
  container: {
    marginBottom: spacing.margin.mdd,
    paddingHorizontal: spacing.padding.mdd,
    width: '100%',
  },
  errorText: {
    color: palette.error,
    fontSize: typography.accent.md,
    marginTop: spacing.margin.xxs,
  },
  forgotPassword: {
    color: palette.primary.dark,
    fontSize: typography.accent.md,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: spacing.margin.mdd,
  },
  iconContainer: {
    marginRight: spacing.margin.ssm,
  },
  inputContainer: {
    backgroundColor: palette.neutral['100'],
    borderBottomWidth: border.radius.s,
    borderRadius: border.radius.md,
    height: 50,
    paddingHorizontal: spacing.padding.sn,
  },
  signUp: {
    color: palette.primary.dark,
    fontSize: typography.accent.md,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: spacing.margin.xl,
  },
});
