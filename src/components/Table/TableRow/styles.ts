import { createStyles, toRem } from '../../Theme';

export default () => createStyles((theme) => ({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    transition: 'background-color .3s',
    cursor: 'default',
    '&:not(:last-child)': {
      borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
    },
    '&:hover': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
    },
  },
  tableRowSelectable: {
    cursor: 'pointer',
  },
  tableRowSelected: {
    backgroundColor: theme.colors.primary.extraLight50,
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: [theme.spacing[16], theme.spacing[24]],
  },
  text: {
    color: theme.colors.text.headline
  },
}), { internalUsage: true });
