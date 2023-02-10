import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  divider: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[12],
    width: '100%',
    padding: [theme.spacing[12], theme.spacing[16]],
    boxSizing: 'border-box',
    '& *, & *:before, & *:after': {
      boxSizing: 'inherit',
    },
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  fullBleed: {
    borderBottom: `1px solid ${theme.colors.neutralGray.light200}`,
  },
  inset: {
    paddingRight: 0,
    '& :nth-child(2)': {
      position: 'relative',
      width: '100%',
    },
    '&:not(:last-child) :nth-child(2):after': {
      display: 'block',
      position: 'absolute',
      top: `calc(100% + ${theme.spacing[12]})`,
      width: '100%',
      content: '""',
      borderBottom: `1px solid ${theme.colors.neutralGray.light200}`,
    },
  },
  middle: {
    width: `calc(100% - ${theme.spacing[32]})`,
    paddingRight: 0,
    paddingLeft: 0,
    margin: [0, theme.spacing[16]],
    borderBottom: `1px solid ${theme.colors.neutralGray.light200}`,
  },
}), { internalUsage: true });
