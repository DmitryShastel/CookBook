export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,

  padding: {
    x: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    sm2: 12,
    md: 16,
    md2: 18,
    md3: 20,
    lg2: 22,
    lg: 24,
    xl2: 26,
    xl3: 28,
    xl4: 30,
    xl5: 32,
    xl6: 34,
    xl7: 36,
    xl8: 38,
    xl9: 40,
    xxl: 48,
    xxxl: 50,
  },

  margin: {
    x: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    sm2: 10,
    sm3: 12,
    md: 16,
    md2: 18,
    md3: 20,
    lg2: 22,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 50,
  },
} as const;

export const typography = {
  weight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },

  accent: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 22,
    xxxl: 24,
    xxxl2: 26,
    xxxl3: 28,
    xxxl4: 30,
    xxxl5: 32,
  },
};

export const border = {
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 18,
    xxxl: 20,
    full: 9999,
  },
} as const;

export const opacity = {
  disabled: 0.7,
  active: 1,
  hover: 0.8,
  pressed: 0.6,
} as const;

export const palette = {
  primary: {
    light: '#64B5F6',
    main: '#2196F3',
    dark: '#1976D2',
  },

  accent: {
    light: '#BA68C8',
    main: '#9C27B0',
    dark: '#7B1FA2',
  },

  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    1000: '#000000',
  },

  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  info: '#2196F3',

  alpha: {
    high: 'FF',
    medium: '80',
    low: '20',
  },
};
