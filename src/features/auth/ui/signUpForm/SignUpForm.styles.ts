import { StyleSheet } from 'react-native';
import {
  border,
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
    marginBottom: border.radius.xl,
    marginTop: border.radius.xxxl,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: palette.primary.light,
  },
  buttonText: {
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
  container: {
    width: '100%',
  },
  errorText: {
    color: palette.error,
    fontSize: typography.accent.md,
  },
  iconContainer: {
    marginRight: spacing.margin.ssm,
  },
  input: {
    fontSize: typography.accent.md,
    paddingVertical: spacing.padding.x,
  },
  inputContainer: {
    backgroundColor: palette.neutral['100'],
    borderBottomWidth: border.radius.s,
    borderRadius: border.radius.md,
    minHeight: 50,
    paddingHorizontal: spacing.padding.sm,
  },
  inputWrapper: {
    marginBottom: spacing.margin.md,
    paddingHorizontal: spacing.margin.x,
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: spacing.margin.sm,
  },
  loginText: {
    color: palette.primary.dark,
    fontSize: typography.accent.md,
  },
});
