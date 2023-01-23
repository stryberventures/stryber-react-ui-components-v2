import { createStyles, toRem } from '../../../components/Theme'


export default createStyles((theme) => ({
  listItem: {
    padding: [toRem(20), toRem(8)],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.text.secondary,
  },
  subtitle: {
    color: theme.colors.text.tint,
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
