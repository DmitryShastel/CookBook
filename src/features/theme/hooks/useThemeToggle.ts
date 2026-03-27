import { palette } from '@/shared/styles/CommonStyles';
import { useThemeStore } from '@/shared/stores/theme/useThemeStore';

export const useThemeToggle = () => {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  const darkColors = {
    primary: {
      light: palette.primary.light,
      main: palette.primary.main,
      dark: palette.primary.dark,
    },
    accent: {
      light: palette.accent.light,
      main: palette.accent.main,
      dark: palette.accent.dark,
    },
    background: {
      primary: palette.neutral[900],
      secondary: palette.neutral[800],
      tertiary: palette.neutral[700],
    },
    text: {
      primary: palette.neutral[0],
      secondary: palette.neutral[300],
      inverse: palette.neutral[900],
    },
    border: palette.neutral[700],
    surface: palette.neutral[800],
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    info: palette.info,
    card: {
      background: palette.neutral[800],
      border: palette.neutral[700],
    },
  };

  const lightColors = {
    primary: palette.primary,
    accent: palette.accent,
    background: {
      primary: palette.neutral[0],
      secondary: palette.neutral[50],
      tertiary: palette.neutral[100],
    },
    text: {
      primary: palette.neutral[900],
      secondary: palette.neutral[700],
      inverse: palette.neutral[0],
    },
    border: palette.neutral[300],
    surface: palette.neutral[50],
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    info: palette.info,
    card: {
      background: palette.neutral[0],
      border: palette.neutral[300],
    },
  };

  const colors = theme === 'light' ? lightColors : darkColors;

  return {
    theme,
    colors,
    setTheme,
    toggleTheme,
  };
};
