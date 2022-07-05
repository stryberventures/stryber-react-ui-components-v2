import React from 'react';
import { createUseStyles, Styles, ThemeProvider as JssThemeProvider } from 'react-jss';
import { createStylesOptions, ITheme, IThemeProvider } from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Classes } from 'jss';

const ThemeProvider = (props: IThemeProvider) => {
  const { theme, children } = props;

  return (
    <JssThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <GlobalStyles>
        { children }
      </GlobalStyles>
    </JssThemeProvider>
  );
}

function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ITheme) => Styles<TStyles, TProps>,
  options?: createStylesOptions,
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles((providedTheme) => {
    const theme = { ...defaultTheme, ...providedTheme };
    
    return styles(theme);
  }, options);
}

export {
  defaultTheme,
  ThemeProvider,
  createStyles,
}
