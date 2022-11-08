import React, { useCallback, useContext, useMemo, useState, useEffect, useRef } from 'react';
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
  ({ theme: initialTheme, children }: IThemeProvider) => {
    const didMountRef = useRef(false);
    const [theme, setTheme] = useState<ThemeType>(merge(defaultTheme, initialTheme));
    const updateTheme = useCallback(<T,>(updatedTheme: T) => {
      setTheme(currentTheme => merge(currentTheme, updatedTheme));
    }, []);
    console.log('render');
    // const memoizedValue = useMemo((): IThemeContext => {
    //   return {
    //     theme,
    //     updateTheme,
    //   };
    // }, [theme, updateTheme]);

    useEffect(() => {
      // console.log('initial', initialTheme);
      didMountRef.current && updateTheme(initialTheme);
      didMountRef.current = true;
    }, [initialTheme]);

    return (
      <ThemeContext.Provider value={{theme, updateTheme}}>
        <JssThemeProvider theme={theme}>
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
