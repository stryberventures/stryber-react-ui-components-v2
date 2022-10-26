import { createStyles } from '../Theme';
import toRem from '../Theme/toRem';

export default createStyles(() => ({
  content: {
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  },
  clearIcon: {
    marginRight: toRem(10),
    zIndex: 99,
  }
}));
