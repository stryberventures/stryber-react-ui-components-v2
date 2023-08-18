import React from 'react';
import { Breakpoints } from '../Grid/types';
import { TextVariant } from '../Text/types';

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

declare global {
  namespace DesignSystem {
    interface IProjectTheme {}
  }
}

export type ThemeType = ITheme & DesignSystem.IProjectTheme;
export type CustomTheme = RecursivePartial<ThemeType> &
  RecursivePartial<DesignSystem.IProjectTheme> &
  Record<string, any>;

type TSpacing = 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 64 | 80 | 96 | 160;

export interface IThemeContext {
  theme: ThemeType;
  updateTheme: (updatedTheme: CustomTheme) => void;
  dir: string;
  updateDir: (dir: string) => void;
}

export interface IThemeProvider {
  theme: CustomTheme;
  children: React.ReactNode;
}

export type createStylesOptions = {
  name?: string;
  index?: number;
  // used to build a proper priority of styles in DOM based on JSS index option between
  // components library styles and external styles
  internalUsage?: boolean;
};

interface IPalette {
  dark600: string;
  main500: string;
  medium400: string;
  medium300: string;
  light200: string;
  light100: string;
  extraLight50: string;
}

interface IGrayPalette {
  extraDark900: string;
  extraDark800: string;
  dark700: string;
  dark600: string;
  main500: string;
  medium400: string;
  medium300: string;
  light200: string;
  light100: string;
  extraLight50: string;
}

export interface ITheme {
  colors: {
    primary: IPalette;
    secondary: IPalette;
    error: IPalette;
    warning: IPalette;
    success: IPalette;
    neutralGray: IGrayPalette;
    background: {
      white: string;
      extraLightGrey: string;
    };
    text: {
      headline: string;
      secondary: string;
      disabled: string;
      tint: string;
    };
    contrast: {
      white: string;
      black: string;
    };
  };
  font: string;
  grid: {
    columns: {
      [key in Breakpoints]: number;
    };
    margin: {
      [key in Breakpoints]: string;
    };
    gap: {
      [key in Breakpoints]: string;
    };
    maxWidth: number;
  };
  breakpoints: {
    [key in Breakpoints]: number;
  };
  spacing: {
    [key in TSpacing]: string;
  };
  text: {
    [key in TextVariant]: React.CSSProperties;
  };
}
