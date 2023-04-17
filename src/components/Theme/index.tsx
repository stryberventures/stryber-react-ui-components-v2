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
  rtl: false,
  updateRTL: () => console.log('ThemeProvider is not rendered yet'),
});

const ThemeProvider = React.memo(
  ({ theme: initial, rtl: initialRTL = false, children }: IThemeProvider) => {
    const [theme, setTheme] = useState<ThemeType>(merge(defaultTheme, initial));
    const [rtl, setRTL] = useState(initialRTL);
    const updateTheme = useCallback(<T,>(updatedTheme: T) => {
      setTheme(currentTheme => merge(currentTheme, updatedTheme));
    }, []);
    const updateRTL = useCallback((updatedRTL: boolean) => {
      setRTL(updatedRTL);
    }, []);

    const contextValue: IThemeContext =  {
      theme,
      rtl,
      updateTheme,
      updateRTL,
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

const useTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return {
    theme,
    updateTheme,
  }
}
const useRTL = () => {
  const { rtl, updateRTL } = useContext(ThemeContext);
  return {
    rtl,
    updateRTL,
  };
}

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
  toRem,
  createStyles,
  useTheme,
  useRTL,
}
