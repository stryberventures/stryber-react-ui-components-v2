import React from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import { ITheme} from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from '../../constants/defaultTheme';

export interface IThemeProvider {
  theme: ITheme,
  children: React.ReactNode,
}

export const ThemeProvider = (props: IThemeProvider) => {
  const { theme, children } = props;

  return (
    <JssThemeProvider theme={theme}>
      <GlobalStyles>
        { children }
      </GlobalStyles>
    </JssThemeProvider>
  );
}

ThemeProvider.defaultProps = {
  theme: defaultTheme,
}
