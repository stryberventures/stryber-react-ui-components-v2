import React from 'react';

export interface IThemeProvider {
  theme: Partial<ITheme>,
  children: React.ReactNode,
}

export type createStylesOptions = {
  name?: string;
  index?: number;
}

interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
}

interface IDefaultPalette {
  main: string,
  dark: string,
  light: string,
  extraLight: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  error: IPalette,
  success: IPalette,
  default: IDefaultPalette,
  background: {
    default: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  }
  font: string,
}
