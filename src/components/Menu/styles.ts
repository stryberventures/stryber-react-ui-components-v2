import { createStyles, toRem } from '../Theme';
import { IMenu } from './index';

export default () =>
  createStyles<any, IMenu>(
    () => ({
      listContainer: {},
      small: {
        width: toRem(136),
      },
      medium: {
        width: toRem(200),
      },
      large: {
        width: toRem(343),
      },
      menuContainer: {
        borderRadius: `${toRem(8)} !important`,
        overflow: 'hidden',
      },
    }),
    { internalUsage: true }
  );
