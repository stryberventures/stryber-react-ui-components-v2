import { ITheme } from './types';
import toRem from '../../utils/toRem';

export const defaultColumns = {
  xs: 4,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 12,
};

export const defaultGaps = {
  xs: toRem(16),
  sm: toRem(16),
  md: toRem(24),
  lg: toRem(24),
  xl: toRem(40),
};

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
    columns: defaultColumns,
    gap: defaultGaps,
    breakpoints: {
      xs: 0,
      sm: 360,
      md: 656,
      lg: 1024,
      xl: 1280,
    },
  },
}
