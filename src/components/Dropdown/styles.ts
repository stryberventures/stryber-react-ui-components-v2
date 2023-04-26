import { createStyles, toRem } from '../Theme';
import { IDropdown } from './index';

export default createStyles((theme) => ({
  dropdown: (props: IDropdown) => ({
    direction: props.dir || 'inherit',
    width: toRem(320),
    position: 'relative',
    display: 'inline-flex',
    userSelect: 'none',
  }),
  overlay: {
    position: 'fixed',
    zIndex: 98,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    backgroundColor: theme.colors.background.white,
    position: 'absolute',
    zIndex: 99,
    border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    borderRadius: toRem(4),
    top: '100%',
    marginTop: toRem(4),
    width: '100%',
    boxSizing: 'border-box',
  },
  toggleIcon: {
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s',
    '& svg path': {
      fill: theme.colors.neutralGray.main500,
    },
  },
  toggleIconOpened: {
    transform: 'rotate(180deg)',
  },
  toggleIconDisabled: {
    '& svg path': {
      fill: theme.colors.text.disabled,
    },
  },
  input: {
    width: '100%',
    '&:not($inputDisabled)': {
      cursor: 'pointer',
      '& input': {
        cursor: 'pointer',
      },
    },
  },
  inputDisabled: {},
  fullWidth: {
    width: '100%'
  },
}), { index: 1, internalUsage: true });
