import { createStyles, toRem } from '../Theme';
import { ITable } from './index';

export default () =>
  createStyles(
    (theme) => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      table: (props: ITable) => ({
        direction: props.dir || 'inherit',
        minWidth: '100%',
        width: 'fit-content',
        boxSizing: 'border-box',
        border: [1, 'solid', theme.colors.neutralGray.light200],
        borderRadius: toRem(6),
        '& *, &:after, &:before': {
          boxSizing: 'inherit',
        },
      }),
      selectedItems: {
        color: theme.colors.text.secondary,
      },
      evenRow: {
        backgroundColor: theme.colors.neutralGray.extraLight50,
        '&:hover': {
          backgroundColor: [theme.colors.neutralGray.light100, '!important'],
        },
      },
      paginationPlaceholder: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: [theme.spacing[16], theme.spacing[24]],
      },
      paginationPlaceholderText: {
        color: theme.colors.text.secondary,
      },
    }),
    { internalUsage: true }
  );
