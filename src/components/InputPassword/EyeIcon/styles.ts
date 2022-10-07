import { createStyles } from '../../Theme';

export default createStyles((theme) => ({
  eyeIcon: {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    '& svg path': {
      fill: theme.default.dark,
    },
  },
  disabled: {
    '& svg path': {
      fill: theme.text.disabled,
    },
  }
}));
