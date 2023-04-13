import React, { useCallback, useContext, useState } from 'react';
import { createUseStyles, Styles, ThemeProvider as JssThemeProvider } from 'react-jss';
import { createStylesOptions, IThemeContext, IThemeProvider, ThemeType } from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Classes } from 'jss';
import { merge, toRem } from './utils';
import { useEffectAfterMount } from '../../hooks/useEffectAfterMount';

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

    const contextValue: IThemeContext =  {
      theme,
      updateTheme,
    };

    useEffectAfterMount(() => {
      updateTheme(initial);
    }, [initial])

    return (
      <ThemeContext.Provider value={contextValue}>
        <JssThemeProvider theme={contextValue.theme}>
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

// const externalStylesIndex = 50;

function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ThemeType) => Styles<TStyles, TProps>,
  options?: createStylesOptions,
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles((providedTheme) => {
    const theme = { ...defaultTheme, ...providedTheme };

    return styles(theme);
  }, {
    ...options,
    // Next 3 lines of code supposed to allow to overwrite library styles with external styles (without passing the index to jss and without !important)
    // But it breaks the module styles - whenever index remains the same (50) the styles are not updated
    // when we switch between the modules
    // ...(!options?.internalUsage && {
    //   index: options?.index ? options.index + externalStylesIndex : externalStylesIndex,
    // })
  });
}

export {
  defaultTheme,
  ThemeProvider,
  toRem,
  createStyles,
  useTheme,
}
