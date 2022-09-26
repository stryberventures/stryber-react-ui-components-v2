import { createStyles } from '../Theme';
import { IDropdown } from './index';

export default createStyles((theme) => ({
  dropdown: {
    width: 320,
    position: 'relative',
    display: 'inline-flex',
    userSelect: 'none',
  },
  overlay: {
    position: 'fixed',
    zIndex: 98,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    backgroundColor: theme.background.default,
    position: 'absolute',
    zIndex: 99,
    border: `1px solid ${theme.default.main}`,
    borderRadius: 4,
    top: 44,
    marginTop: 8,
    width: '100%',
    boxSizing: 'border-box',
  },
  toggleIcon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 5,
    transition: 'transform 0.3s',
    '& svg path': {
      fill: theme.default.dark,
    },
  },
  toggleIconOpened: {
    transform: 'rotate(180deg)',
  },
  toggleIconDisabled: {
    '& svg path': {
      fill: theme.text.disabled,
    },
  },
  input: (props: IDropdown) => ({
    width: '100%',
    '&:not($inputDisabled)': {
      cursor: 'pointer',
      '& input': {
        cursor: 'pointer',
      },
    },
    '&$focus>div:not($inputContainerError)': {
      border: `1px solid ${theme[props.color!].main}`,
      outline: `4px solid ${theme[props.color!].light}`,
      borderRadius: 4,
    }
  }),
  focus: {},
  inputDisabled: {},
  fullWidth: {
    width: '100%'
  },
}), { index: 1 });
