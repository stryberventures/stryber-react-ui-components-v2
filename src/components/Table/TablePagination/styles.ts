import { createStyles, toRem } from '../../Theme';

export default () => createStyles((theme) => ({
  paginationSelect: {
    marginLeft: theme.spacing[16],
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: [theme.spacing[16], theme.spacing[24]],
    borderTop: [1, 'solid', theme.colors.neutralGray.light200],
    '& $paginationSelect': {
      width: toRem(94),
    },
  },
  pagesContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: theme.spacing[48],
    cursor: 'pointer',
    outline: 'none',
  },
  disabledArrow: {
    fill: theme.colors.neutralGray.light200,
  },
}), { internalUsage: true });
