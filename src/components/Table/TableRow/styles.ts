import { ITableRow } from './index';
import { createStyles } from '../../Theme';

export default () => createStyles((theme) => ({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
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
  tableRowSelectable: {
    cursor: 'pointer',
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  tableRowSelected: (props: ITableRow) => ({
    backgroundColor: theme.colors[props.color!].extraLight50,
  }),
  tableRowDisabled: {
    backgroundColor: theme.colors.background.extraLightGrey,
    cursor: 'default',
    color: [theme.colors.text.disabled, '!important'],
  },
  textDisabled: {
    color: [theme.colors.text.disabled, '!important'],
  },
  tableCell: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: [theme.spacing[16], theme.spacing[24]],
  },
  text: {
    color: theme.colors.text.headline
  },
}), { internalUsage: true });
