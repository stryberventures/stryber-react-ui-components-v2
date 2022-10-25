import { createStyles } from '../Theme';
import toRem from '../Theme/toRem';

export default createStyles((theme) => ({
  errorMessage: {
    color: theme.error.dark,
    lineHeight: toRem(17),
    fontSize: toRem(14),
    fontFamily: theme.font,
  },
}));
