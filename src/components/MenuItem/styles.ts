import { createStyles, toRem } from '../Theme';
import { IMenuItem } from './index';


export default () => createStyles((theme) => ({
  menuItemWrapper: (props: IMenuItem) => ({
    direction: props.dir || 'inherit',
    display: 'flex',
  }),
  menuItem: (props: IMenuItem) => ({
    boxSizing: 'border-box',
    width: '100%',
    textAlign: props.dir === 'rtl' ? 'right' : 'left',
    padding: toRem(16),
    overflow: 'hidden',
    '&:not($readOnly):hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.neutralGray.extraLight50,
    },
  }),
  menuItemText: {
    lineHeight: toRem(24),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.colors.text.headline,
  },
  selected: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
  readOnly: {},
}), { internalUsage: true });
