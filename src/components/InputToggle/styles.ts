import { IInputToggle } from './types';
import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: (props: IInputToggle) => ( {
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
    pointerEvents: 'none',
  },
  label: {
    transition: '0.3s',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  placeholder: (props: IInputToggle) => ({
    padding: '8px 4px',
    color: theme[props.color!].light,
  }),
  errorMessage: () => ({
    color: theme.error.main,
    fontSize: 10,
  }),
  error: () => ({
    color: theme.error.main,
  }),
}));
