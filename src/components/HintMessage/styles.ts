import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  hintMessage: {
    color: theme.text.hint,
    lineHeight: toRem(17),
    fontSize: toRem(14),
    fontFamily: theme.font,
  },
  disabled: {
    color: theme.text.disabled,
  }
}), { internalUsage: true });
