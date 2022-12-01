import { ITheme } from './types';
import toRem from '../../utils/toRem';

export const defaultTheme: ITheme = {
  background: {
    default: '#fff',
    disabled: '#FCFCFD',
  },
  default: {
    dark: '#667085',
    main: '#C7CCD3',
    light: '#E4E7EC',
    extraLight: '#EFF1F3',
  },
  text: {
    primary: '#000',
    secondary: '#344054',
    disabled: '#D2D2D2',
    hint: '#667085',
  },
  primary: {
    main: '#003CB8',
    light: '#E7EAF9',
    dark: '#001D9A',
    contrast: '#fff',
  },
  secondary: {
    main: '#58329A',
    light: '#EDE7F4',
    dark: '#3D2181',
    contrast: '#fff',
  },
  error: {
    main: '#EC726B',
    light: '#FBDCDA',
    dark: '#D92C20',
    contrast: '#000',
  },
  success: {
    main: '#6CA78B',
    light: '#6CA78B',
    dark: '#6CA78B',
    contrast: '#fff',
  },
  font: 'Inter, sans-serif',
  grid: {
    columns: 12,
    gap: {
      xs: toRem(10),
      sm: toRem(10),
      md: toRem(10),
      lg: toRem(10),
      xl: toRem(10),
    },
    breakpoints: {
      xs: 0,
      sm: 520,
      md: 980,
      lg: 1200,
      xl: 1500,
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
