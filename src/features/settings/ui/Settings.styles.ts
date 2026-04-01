import { StyleSheet } from 'react-native';
import {
  border,
  palette,
  spacing,
  typography,
} from '@/shared/styles/CommonStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.neutral['0'],
    flex: 1,
  },
  section: {
    marginTop: spacing.margin.md3,
  },
  sectionContent: {
    backgroundColor: palette.neutral['0'],
    borderBottomWidth: border.radius.xs,
    borderColor: palette.neutral['0'],
    borderTopWidth: border.radius.xs,
  },
  sectionTitle: {
    color: palette.neutral['600'],
    fontSize: typography.accent.sm,
    fontWeight: typography.weight.semiBold,
    letterSpacing: 0.5,
    marginBottom: spacing.margin.sm,
    marginLeft: spacing.margin.md3,
    textTransform: 'uppercase',
  },
});
