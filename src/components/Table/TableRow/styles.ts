import { ITableRow } from './index';
import { createStyles, toRem } from '../../Theme';

export default () =>
  createStyles(
    (theme) => ({
      tableRow: {
        color: theme.colors.text.headline,
      },
      tableHeadRow: {
        height: toRem(44),
        maxHeight: toRem(44),
        backgroundColor: theme.colors.neutralGray.extraLight50,
        borderTop: [1, 'solid', theme.colors.neutralGray.light200],
        borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
      },
      tableBodyRow: {
        transition: 'background-color .3s',
        cursor: 'default',
        borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
        '&:last-child': {
          borderBottom: 0,
        },
        '&:hover': {
          backgroundColor: theme.colors.neutralGray.extraLight50,
        },
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tableRowSelected: (props: ITableRow) => ({
        backgroundColor: [
          theme.colors[props.color!].extraLight50,
          '!important',
        ],
      }),
      tableRowDisabled: {
        backgroundColor: theme.colors.background.extraLightGrey,
        cursor: 'default',
        color: [theme.colors.text.disabled, '!important'],
      },
    }),
    { internalUsage: true }
  );
