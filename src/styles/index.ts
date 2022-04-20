import { ITheme } from '../components/ThemeProvider/types';
import { createUseStyles, Styles } from 'react-jss';
import { Classes } from 'jss';
import { defaultTheme } from './defaultTheme';

type Options = {
  name?: string;
  index?: number;
}

export function createStyles(
  styles: (theme: ITheme) => Styles | {},
  options?: Options
): (data: any) => Classes {
  return createUseStyles((providedTheme: ITheme) => {
    const theme = { ...defaultTheme, ...providedTheme};
    
    return styles(theme);
  }, options);
}
