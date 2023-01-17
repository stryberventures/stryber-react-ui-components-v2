import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  errorMessage: {
    color: theme.colors.error.dark600,
    lineHeight: toRem(17),
  },
}), { internalUsage: true });
