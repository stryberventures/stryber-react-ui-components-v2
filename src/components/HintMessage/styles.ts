import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  message: {
    color: theme.text.hint,
    height: 17,
    fontSize: 14,
    fontFamily: theme.font,
  },
  disabled: {
    color: theme.text.disabled,
  }
}));
