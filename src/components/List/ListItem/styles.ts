import { createStyles, toRem } from '../../Theme'


export default createStyles((theme) => ({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemDivider: {
    borderBottom: '1px solid ' + theme.colors.neutralGray.light200,
  },
  smallListItem: {
    padding: [toRem(8), toRem(8)],
  },
  mediumListItem: {
    padding: [toRem(12), toRem(8)],
  },
  largeListItem: {
    padding: [toRem(16), toRem(8)],
  },
  listItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.text.secondary,
    fontSize: '12px',
    lineHeight: '14px'
  },
  title: {
    color: theme.colors.text.headline,
  },
  subtitle: {
    color: theme.colors.text.secondary,
  },
  listItemText: {
    display: 'block',
  },
  leftContent: {
    marginRight: toRem(16),
  },
  rightContent: {
    marginLeft: toRem(16),
  },
}), { internalUsage: true });
