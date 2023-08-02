import { createStyles, toRem } from '../../Theme';
import { ITableSortButton } from './index';

export default () =>
  createStyles(
    (theme) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sortingIconWrapper: (props: ITableSortButton) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: toRem(24),
        height: toRem(24),
        padding: theme.spacing[8],
        borderRadius: '50%',
        border: [1, 'solid', 'transparent'],
        cursor: 'pointer',
        transition: 'background-color .3s, border-color .3s',
        '& svg path': {
          transition: 'fill .3s',
        },
        '&:hover': {
          background: theme.colors[props.color!].extraLight50,
          border: [1, 'solid', theme.colors[props.color!].extraLight50],
        },
        '&:active': {
          background: theme.colors[props.color!].light100,
          border: [1, 'solid', theme.colors[props.color!].light100],
        },
        '&:focus-visible': {
          background: theme.colors[props.color!].extraLight50,
          border: [1, 'solid', theme.colors[props.color!].medium300],
          borderRadius: toRem(12),
          outline: 'none',
        },
      }),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sortingIconActive: (props: ITableSortButton) => ({
        background: theme.colors[props.color!].extraLight50,
        border: [1, 'solid', theme.colors[props.color!].extraLight50],
        '& svg path': {
          fill: theme.colors[props.color!].medium300,
        },
      }),
      sortingIcon: {
        width: toRem(12),
        height: toRem(12),
        minWidth: toRem(12),
        minHeight: toRem(12),
        '& *': {
          fill: theme.colors.text.secondary,
        },
      },
    }),
    { internalUsage: true }
  );
