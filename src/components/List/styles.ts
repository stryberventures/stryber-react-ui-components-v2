import { createStyles } from '../Theme';
import { IList } from './index';

export default () => createStyles<any, IList>(() => ({
  list: ({ dir }) => ({
    direction: dir || 'inherit',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }),
}));
