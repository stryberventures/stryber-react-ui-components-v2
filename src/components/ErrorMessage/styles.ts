import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  errorMessage: {
    color: theme.error.dark,
    lineHeight: toRem(17),
  },
}));
