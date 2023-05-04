import { createStyles } from '../../Theme';

export default createStyles((theme) => ({
  eyeIcon: {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '& svg path': {
      fill: theme.colors.text.headline,
    },
  },
  disabled: {
    '& svg path': {
      fill: theme.colors.text.disabled,
    },
  }
}), { internalUsage: true });
