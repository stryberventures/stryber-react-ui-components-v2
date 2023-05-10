import { createStyles, toRem } from '../../Theme'


export default createStyles((theme) => ({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      background: theme.colors.neutralGray.light200,
    }
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
  label: {
    color: theme.colors.text.secondary,
    fontSize: '12px',
    height: '14px'
  },
  title: {
    color: theme.colors.text.headline,
    height: '24px',
    fontWeight: 400
  },
  subtitle: {
    color: theme.colors.text.secondary,
    height: '20px'
  },
  listItemText: {
    display: 'flex',
    alignItems: 'center'
  },
  leftContent: {
    marginRight: toRem(16),
  },
  rightContent: {
    marginLeft: toRem(16),
  },
}), { internalUsage: true });
