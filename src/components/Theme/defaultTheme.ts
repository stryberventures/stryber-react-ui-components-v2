import { ITheme } from './types';
import toRem from '../../utils/toRem';

export const defaultColumns = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 12,
  xxl: 12,
};

export const defaultGaps = {
  xs: toRem(16),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(24),
  xl: toRem(40),
  xxl: toRem(40),
};

export const defaultMargins = {
  xs: toRem(16),
  sm: toRem(16),
  md: toRem(32),
  lg: toRem(74),
  xl: toRem(150),
  xxl: toRem(150),
};

export const defaultTheme: ITheme = {
  colors: {
    primary: {
      dark600: '#001D9A',
      main500: '#003CB8',
      medium400: '#034ECF',
      medium300: '#4669D7',
      light200: '#98A7E7',
      light100: '#C2C9F1',
      extraLight50: '#E7EAF9',
    },
    secondary: {
      dark600: '#3D2181',
      main500: '#58329A',
      medium400: '#6C3FA9',
      medium300: '#815BB6',
      light200: '#B49FD4',
      light100: '#D2C5E5',
      extraLight50: '#EDE7F4',
    },
    error: {
      dark600: '#BF2600',
      main500: '#DE350B',
      medium400: '#FF4130',
      medium300: '#FF7452',
      light200: '#FF8F73',
      light100: '#FFBDAD',
      extraLight50: '#FFEBE6',
    },
    success: {
      dark600: '#006644',
      main500: '#00875A',
      medium400: '#36A176',
      medium300: '#57D9A3',
      light200: '#79F2C0',
      light100: '#ABF5D1',
      extraLight50: '#E3FCEF',
    },
    warning: {
      dark600: '#EC7603',
      main500: '#FF991F',
      medium400: '#FFAB00',
      medium300: '#FFC400',
      light200: '#FFE380',
      light100: '#FFF0B3',
      extraLight50: '#FFFAE6',
    },
    contrast: {
      white: '#FFFFFF',
      black: '#000000',
    },
    neutralGray: {
      extraDark900: '#101828',
      extraDark800: '#1D2939',
      dark700: '#344054',
      dark600: '#475467',
      main500: '#667085',
      medium400: '#98A2B3',
      medium300: '#D0D5DD',
      light200: '#E4E7EC',
      light100: '#F2F4F7',
      extraLight50: '#F9FAFB',
    },
    text: {
      headline: '#101828',
      secondary: '#475467',
      disabled: '#D2D2D2',
      tint: '#98A2B3',
    },
    background: {
      white: '#FFFFFF',
      extraLightGrey: '#F9FAFB',
    },
  },
  font: 'Inter, sans-serif',
  grid: {
    columns: defaultColumns,
    margin: defaultMargins,
    gap: defaultGaps,
    maxWidth: 1320,
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    },
  },
  spacing: {
    2: toRem(2),
    4: toRem(4),
    8: toRem(8),
    12: toRem(12),
    16: toRem(16),
    24: toRem(24),
    32: toRem(32),
    40: toRem(40),
    48: toRem(48),
    64: toRem(64),
    80: toRem(80),
    96: toRem(96),
    160: toRem(160),
  },
}
