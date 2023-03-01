import { createStyles, toRem } from '../Theme';


export default createStyles((theme) => ({
  tabs: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    minWidth: '100%',
    width: 'fit-content',
    position: 'relative',
    boxSizing: 'border-box',
    '&:after': {
      display: 'block',
      position: 'absolute',
      content: '""',
      bottom: 0,
      left: 0,
      width: '100%',
      height: toRem(1),
      backgroundColor: theme.colors.neutralGray.light200,
    },
    '& *, *:after, *:before': {
      boxSizing: 'inherit',
    },
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  },
  vertical: {
    width: 'fit-content',
    flexDirection: 'column',
    borderBottom: 'none',
    '&:after': {
      top: 0,
      left: 0,
      width: toRem(1),
      height: '100%',
    },
  },
}), { internalUsage: true });
