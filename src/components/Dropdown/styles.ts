import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  dropdown: {
    width: toRem(320),
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
    backgroundColor: theme.colors.background.white,
    position: 'absolute',
    zIndex: 99,
    border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    borderRadius: toRem(4),
    top: toRem(44),
    marginTop: toRem(8),
    width: '100%',
    boxSizing: 'border-box',
  },
  toggleIcon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: toRem(5),
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
