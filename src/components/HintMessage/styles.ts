import { createStyles } from '../Theme/index';

export default createStyles((theme) => ({
  hintMessage: {
    color: theme.text.hint,
    lineHeight: '17px',
    fontSize: 14,
    fontFamily: theme.font,
  },
  disabled: {
    color: theme.text.disabled,
  }
}));
