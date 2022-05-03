import { ITheme } from '../ThemeProvider/types';
import { ICheckBoxProps } from './index';
import { createStyles } from '../../styles';

export default createStyles((theme: ITheme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: (props: ICheckBoxProps) => ( {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    backgroundColor: theme[props.color!].contrast,
    width: 14,
    height: 14,
    border: [1, 'solid', theme[props.color!].main],
    borderRadius: 4,
  }),
  disabled: {
    opacity: 0.45,
    cursorEvents: 'none',
  },
  label: {
    transition: '0.3s',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  placeholder: (props: ICheckBoxProps) => ({
    padding: '8px 4px',
    color: theme[props.color!].light,
  }),
  errorMessage: (props: ICheckBoxProps) => ({
    color: theme[props.color!].errorRed,
    fontSize: 10,
  }),
  error: (props: ICheckBoxProps) => ({
    color: theme[props.color!].errorRed,
  }),
}));
