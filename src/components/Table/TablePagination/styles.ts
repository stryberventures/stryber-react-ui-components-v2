import { createStyles, toRem } from '../../Theme';
import { ITablePagination } from './index';

export default () => createStyles<any, ITablePagination>((theme) => ({
  paginationSelect: (props) => ({
    [props.dir === 'rtl' ? 'marginRight' : 'marginLeft']: theme.spacing[16],
  }),
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
  arrow: (props) => ({
    [props.dir === 'rtl' ? 'marginRight' : 'marginLeft']: theme.spacing[48],
    cursor: 'pointer',
    outline: 'none',
  }),
  disabledArrow: {
    fill: theme.colors.neutralGray.light200,
  },
}), { internalUsage: true });
