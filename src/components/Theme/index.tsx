import React, { useCallback, useContext, useMemo, useState } from 'react';
import { createUseStyles, Styles, ThemeProvider as JssThemeProvider } from 'react-jss';
import { createStylesOptions, IThemeContext, IThemeProvider, ThemeType } from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Classes } from 'jss';
import merge from './utils';

const ThemeContext = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
});

const ThemeProvider = React.memo(
  ({ theme: initial, children }: IThemeProvider) => {
    const [theme, setTheme] = useState<ThemeType>(merge(defaultTheme, initial));
    const updateTheme = useCallback(<T,>(updatedTheme: T) => {
      setTheme(currentTheme => merge(currentTheme, updatedTheme));
    }, []);

    const memoizedValue = useMemo((): IThemeContext => {
      return {
        theme,
        updateTheme,
      };
    }, [theme, updateTheme]);

    return (
      <ThemeContext.Provider value={memoizedValue}>
        <JssThemeProvider theme={memoizedValue.theme}>
          <GlobalStyles>
            {children}
          </GlobalStyles>
        </JssThemeProvider>
      </ThemeContext.Provider>
    );
  },
);

ThemeProvider.displayName = 'ThemeProvider';

const useTheme = () => useContext(ThemeContext);

const externalStylesIndex = 50;

function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ThemeType) => Styles<TStyles, TProps>,
  options?: createStylesOptions,
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles((providedTheme) => {
    const theme = { ...defaultTheme, ...providedTheme };
    
    return styles(theme);
  }, {
    ...options,
    ...(!options?.internalUsage && {
      index: options?.index ? options.index + externalStylesIndex : externalStylesIndex,
    })
  });
}

export {
  defaultTheme,
  ThemeProvider,
  createStyles,
  useTheme,
}
