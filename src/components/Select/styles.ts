import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';


export default createStyles(() => ({
  content: {
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  },
}));
