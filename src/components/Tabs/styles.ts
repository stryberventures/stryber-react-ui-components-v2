import { createStyles, toRem } from '../Theme';


export default createStyles((theme) => ({
  tabs: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    width: 'fit-content',
    borderBottom: `${toRem(2)} solid ${theme.colors.neutralGray.light200}`,
    boxSizing: 'border-box',
    '& *, *:after, *:before': {
      boxSizing: 'inherit',
    },
  },
  vertical: {
    flexDirection: 'column',
    borderBottom: 'none',
    borderLeft: `${toRem(2)} solid ${theme.colors.neutralGray.light200}`,
  },
}), { internalUsage: true });
