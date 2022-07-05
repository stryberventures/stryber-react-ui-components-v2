import { createStyles } from '../Theme/index';

export default createStyles((theme) => ({
  message: {
    color: theme.error.dark,
    lineHeight: '17px',
    fontSize: 14,
    fontFamily: theme.font,
  },
}));
