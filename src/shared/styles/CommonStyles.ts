//spacing
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
    sn: 12,
    md: 16,
    mmd: 18,
    mdd: 20,
    lgg: 22,
    llg: 24,
    qwe: 26,
    wwe: 28,
    qqe: 30,
    qqq: 32,
    www: 34,
    wsx: 36,
    wws: 38,
    ssw: 40,
    xxl: 48,
    xxxl: 50,
  },
  margin: {
    x: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    ssm: 10,
    sn: 12,
    md: 16,
    mmd: 18,
    mdd: 20,
    lgg: 22,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 50,
  },
} as const;
//colors
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
//typography
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
    mdd: 26,
    xll: 28,
    xml: 30,
    xmm: 32,
  },
};

//borders
export const border = {
  radius: {
    s: 0,
    sn: 2,
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
