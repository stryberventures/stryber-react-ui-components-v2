import { createStyles, toRem } from '../../Theme';

export default () => createStyles((theme) => ({
  tableContainer: {
    minWidth: '100%',
    width: 'fit-content',
    boxSizing: 'border-box',
    border: [1, 'solid', theme.colors.neutralGray.light200],
    borderRadius: toRem(6),
    '& *, &:after, &:before': {
      boxSizing: 'inherit',
    }
  },
}), { internalUsage: true });
