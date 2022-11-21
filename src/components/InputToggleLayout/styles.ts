import { createStyles } from '../Theme';
import toRem from '../../utils/toRem'
import { IInputToggle } from './types';


export default createStyles((theme) => ({
  inputToggleLayout: {
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  disabled: {
    pointerEvents: 'none',
  },
  input: (props: IInputToggle) => ( {
    width: 0,
    height: 0,
    opacity: 0,
    margin: 0,
    '&:focus + span': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme[props.color!].light}`,
    }
    //display: 'none',
  }),
  container: {
    userSelect: 'none',
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    '-webkit-tap-highlight-color': 'transparent',
  },
  text: {
    marginLeft: toRem(8),
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'column',
    fontSize: toRem(14),
    position: 'relative',
  },
  reverse: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    '& $text': {
      marginRight: toRem(8),
      marginLeft: 0,
    }
  },
  fullWidth: {
    justifyContent: 'space-between',
  },
  medium: {
    lineHeight: toRem(20),
  },
  small: {
    lineHeight: toRem(16),
  },
  title: {
    color: theme.text.secondary,
  },
  label: {
    color: theme.text.hint,
  },
  textDisabled: {
    color: theme.text.disabled,
  },
  error: {
    marginTop: toRem(8),
  },
}), { internalUsage: true });
