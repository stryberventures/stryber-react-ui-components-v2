import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from '../../../components/Theme';
import { CustomTheme } from '../../../components/Theme/types';

export interface IThemeChooser {
  children: React.ReactNode,
  theme: CustomTheme,
}

const ThemePreview = (props: IThemeChooser) => {
  const { children, theme } = props;
  const { updateTheme } = useTheme();
  
  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return <>{children}</>;
};

export const ThemeChooser = (props: IThemeChooser) => {
  const { children, theme } = props;

  return (
    <ThemeProvider theme={theme}>
      <ThemePreview theme={theme}>
        {children}
      </ThemePreview>
    </ThemeProvider>
  );
}
