import React from 'react';
import { Breakpoints } from '../Grid/types';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

export type ThemeType = ITheme & DesignSystem.IProjectTheme;
export type CustomTheme = RecursivePartial<ThemeType> & RecursivePartial<DesignSystem.IProjectTheme> & Record<string, any>;

export interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: CustomTheme) => void;
}

export interface IThemeProvider {
  theme: CustomTheme;
  children: React.ReactNode,
}

export type createStylesOptions = {
  name?: string;
  index?: number;
  // used to build a proper priority of styles in DOM based on JSS index option between
  // components library styles and external styles
  internalUsage?: boolean,
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
    disabled: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  }
  font: string,
  grid: {
    columns: number,
    gap: {
      [key in Breakpoints]: string;
  
    }
    breakpoints: {
      [key in Breakpoints]: number;
    }
  }
}
