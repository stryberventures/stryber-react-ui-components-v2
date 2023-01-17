import { createStyles, toRem } from '../../../components/Theme';

export default createStyles((theme) => ({
  eyeIcon: {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: toRem(8),
    '& svg path': {
      fill: theme.colors.neutralGray.main500,
    },
  },
  disabled: {
    '& svg path': {
      fill: theme.colors.text.disabled,
    },
  }
}), { internalUsage: true });
