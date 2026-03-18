import { StyleSheet } from 'react-native';
import { border, spacing, typography } from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: border.radius.md,
    height: 50,
  },
  buttonContainer: {
    marginBottom: border.radius.xl,
    marginTop: border.radius.xxxl,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#87CEEB',
  },
  buttonText: {
    color: '#fff',
    fontSize: typography.accent.md,
    fontWeight: typography.weight.semiBold,
  },
  container: {
    width: '100%',
  },
  errorText: {
    color: '#ff4444',
    fontSize: typography.accent.md,
  },
  iconContainer: {
    marginRight: spacing.margin.ssm,
  },
  input: {
    color: '#333',
    fontSize: typography.accent.md,
    paddingVertical: spacing.padding.x,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: border.radius.s,
    borderRadius: border.radius.md,
    height: 50,
    paddingHorizontal: spacing.padding.sm,
  },
  inputWrapper: {
    marginBottom: spacing.margin.md,
    paddingHorizontal: spacing.margin.x,
  },
  loginContainer: {
    marginTop: spacing.margin.sm,
  },
  loginText: {
    color: '#1E90FF',
    fontSize: typography.accent.md,
  },
});
