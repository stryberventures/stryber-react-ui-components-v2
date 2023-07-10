import { createStyles, toRem } from '../Theme';
import { IPagination } from './index';

export default () =>
  createStyles(
    (theme) => ({
      paginationContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: toRem(16),
        gap: toRem(28),
      },
      paginationItem: ({ color }: IPagination) => ({
        padding: [0, toRem(8)],
        height: toRem(35),
        textAlign: 'center',
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        minWidth: toRem(35),
        border: `1px solid ${theme.colors.neutralGray.dark600}`,
        userSelect: 'none',

        '& $dots:hover': {
          backgroundColor: 'transparent',
          cursor: 'default',
        },
        '&:hover': {
          backgroundColor: theme.colors[color!].extraLight50,
          cursor: 'pointer',
          border: `1px solid ${theme.colors[color!].extraLight50}`,
        },
        '&:active': {
          backgroundColor: theme.colors[color!].light100,
          border: `1px solid ${theme.colors[color!].light100}`,
        },

        '&$selected': {
          backgroundColor: theme.colors[color!].dark600,
          color: theme.colors.background.white,
          border: `1px solid ${theme.colors[color!].dark600}`,
        },
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0px 0px 0px 4px #A7B7FF, 0px 0px 0px 2px #FFF',
        },
      }),
      dots: {},
      selected: {},
      disabled: {
        pointerEvents: 'none',
        '& path': {
          fill: theme.colors.neutralGray.medium300,
        },
      },
      arrow: ({ dir }: IPagination) => ({
        width: toRem(24),
        height: toRem(24),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0px 0px 0px 4px #A7B7FF, 0px 0px 0px 2px #FFF',
        },
        borderRadius: toRem(4),
        transform: dir === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',
      }),
    }),
    { internalUsage: true }
  );
