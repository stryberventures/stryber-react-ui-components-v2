import { ITheme } from '../components/ThemeProvider/types';

export const defaultTheme: ITheme = {
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
  // TODO where to put this color?
  highlight: '#C2C9F1',
  font: 'Inter, sans-serif',
}
