import React, { useCallback, useContext, useState, useEffect } from 'react';
import {
  createUseStyles,
  Styles,
  ThemeProvider as JssThemeProvider,
} from 'react-jss';
import {
  createStylesOptions,
  IThemeContext,
  IThemeProvider,
  ThemeType,
} from './types';
import { GlobalStyles } from './GlobalStyles';
import { defaultTheme } from './defaultTheme';
import { Classes } from 'jss';
import { merge, toRem } from './utils';
import { useEffectAfterMount } from '../../hooks/useEffectAfterMount';

const ThemeContext = React.createContext<IThemeContext>({
  theme: defaultTheme,
  updateTheme: () => console.log('ThemeProvider is not rendered yet'),
  dir: 'ltr',
  updateDir: () => console.log('ThemeProvider is not rendered yet'),
});

const ThemeProvider = React.memo(
  ({ theme: initial, children }: IThemeProvider) => {
    const [theme, setTheme] = useState<ThemeType>(merge(defaultTheme, initial));
    const [dir, setDir] = useState(
      window.getComputedStyle(document.documentElement, null).direction
    );
    const updateTheme = useCallback(<T,>(updatedTheme: T) => {
      setTheme((currentTheme) => merge(currentTheme, updatedTheme));
    }, []);
    const updateDir = useCallback((updatedDir: string) => {
      setDir(updatedDir);
    }, []);

    const contextValue: IThemeContext = {
      theme,
      dir,
      updateTheme,
      updateDir,
    };

    const documentObserver = new MutationObserver((mutationsList) => {
      mutationsList.forEach(() => {
        updateDir(
          window.getComputedStyle(document.documentElement, null).direction
        );
      });
    });

    useEffectAfterMount(() => {
      updateTheme(initial);
    }, [initial]);

    useEffect(() => {
      documentObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir', 'style', 'class'],
      });

      return () => {
        documentObserver.disconnect();
      };
    });

    return (
      <ThemeContext.Provider value={contextValue}>
        <JssThemeProvider theme={contextValue.theme}>
          <GlobalStyles>{children}</GlobalStyles>
        </JssThemeProvider>
      </ThemeContext.Provider>
    );
  }
);

ThemeProvider.displayName = 'ThemeProvider';

const useTheme = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return {
    theme,
    updateTheme,
  };
};
const useDir = (pDir?: string) => {
  const { dir } = useContext(ThemeContext);
  return typeof pDir === 'string' && pDir !== 'inherit' ? pDir : dir;
};

// const externalStylesIndex = 50;

function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ThemeType) => Styles<TStyles, TProps>,
  options?: createStylesOptions
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles(
    (providedTheme) => {
      const theme = { ...defaultTheme, ...providedTheme };

      return styles(theme);
    },
    {
      ...options,
      // Next 3 lines of code supposed to allow to overwrite library styles with external styles (without passing the index to jss and without !important)
      // But it breaks the module styles - whenever index remains the same (50) the styles are not updated
      // when we switch between the modules
      // ...(!options?.internalUsage && {
      //   index: options?.index ? options.index + externalStylesIndex : externalStylesIndex,
      // })
    }
  );
}

export { defaultTheme, ThemeProvider, toRem, createStyles, useTheme, useDir };
