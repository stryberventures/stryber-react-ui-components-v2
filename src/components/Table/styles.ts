import { createStyles } from '../Theme';
import { ITable } from './index';

export default () => createStyles(() => ({
  table: (props: ITable) => ({
    direction: props.dir || 'inherit',
    width: '100%',
    borderSpacing: 0,
    borderCollapse: 'collapse',
  }),
}), { internalUsage: true });
