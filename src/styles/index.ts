import { ITheme } from '../components/ThemeProvider/types';
import { createUseStyles, Styles } from 'react-jss';
import { Classes } from 'jss';
import { defaultTheme } from './defaultTheme';

type Options = {
  name?: string;
  index?: number;
}

export function createStyles<TStyles extends string = string, TProps = unknown>(
  styles: (theme: ITheme) => Styles<TStyles, TProps>,
  options?: Options
): (data?: TProps) => Classes<TStyles> {
  return createUseStyles((providedTheme) => {
    const theme = { ...defaultTheme, ...providedTheme};
    
    return styles(theme);
  }, options);
}
