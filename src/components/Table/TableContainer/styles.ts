import { createStyles, toRem } from '../../Theme';
import { ITableContainer } from './index';

export default () => createStyles<any, ITableContainer>((theme) => ({
  tableContainer: (props) => ({
    direction: props.dir || 'inherit',
    minWidth: '100%',
    width: 'fit-content',
    boxSizing: 'border-box',
    border: [1, 'solid', theme.colors.neutralGray.light200],
    borderRadius: toRem(6),
    '& *, &:after, &:before': {
      boxSizing: 'inherit',
    }
  }),
}), { internalUsage: true });
