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
    minHeight: 50,
  },
  buttonContainer: {
    marginBottom: spacing.margin.md2,
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
    marginBottom: spacing.margin.md3,
    paddingHorizontal: spacing.padding.md3,
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
    marginBottom: spacing.margin.md3,
  },
  iconContainer: {
    marginRight: spacing.margin.sm2,
  },
  inputContainer: {
    backgroundColor: palette.neutral['100'],
    borderBottomWidth: border.radius.none,
    borderRadius: border.radius.md,
    minHeight: 50,
    paddingHorizontal: spacing.padding.xs,
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
