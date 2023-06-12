import { createStyles, toRem } from '../../Theme';
import { IListItem } from './index';

export default () =>
  createStyles<any, IListItem>(
    (theme) => ({
      listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          background: theme.colors.neutralGray.light200,
        },
      },
      selected: {
        background: theme.colors.neutralGray.light200,
      },
      disabled: {
        pointerEvents: 'none',
        opacity: '0.4',
        background: theme.colors.background.white,
      },
      listItemDivider: {
        borderBottom: '1px solid ' + theme.colors.neutralGray.light200,
      },
      small: {
        padding: [toRem(8), toRem(16)],
      },
      medium: {
        padding: [toRem(12), toRem(16)],
      },
      large: {
        padding: [toRem(16), toRem(16)],
      },
      listItemContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      leftContent: ({ dir }) => ({
        [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(16),
      }),
      rightContent: ({ dir }) => ({
        [dir === 'rtl' ? 'marginRight' : 'marginLeft']: toRem(16),
      }),
    }),
    { internalUsage: true }
  );
