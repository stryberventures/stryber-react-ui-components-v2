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
    backgroundColor: theme.primary.contrast,
    width: 14,
    height: 14,
    border: [1, 'solid', theme.primary.main],
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
  placeholder: {
    padding: '8px 4px',
    color: theme.primary.light,
  },
  errorMessage: {
    color: '#ea3546',
    fontSize: 10,
  },
  error: {
    color: '#ea3546',
  },
}));
