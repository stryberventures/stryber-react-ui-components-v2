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
    padding: [0, toRem(8)],
    overflow: 'hidden',
    '&:not($readOnly):hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.neutralGray.light100,
    },
  }),
  menuItemText: {
    lineHeight: toRem(33),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: theme.colors.text.headline,
  },
  selected: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
  readOnly: {},
}), { internalUsage: true });
