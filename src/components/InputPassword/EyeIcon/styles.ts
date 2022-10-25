import { createStyles } from '../../Theme';
import toRem from '../../Theme/toRem';

export default createStyles((theme) => ({
  eyeIcon: {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: toRem(8),
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
