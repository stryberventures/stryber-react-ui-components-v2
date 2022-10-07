import { createStyles } from '../Theme/index';

export default createStyles((theme) => ({
  errorMessage: {
    color: theme.error.dark,
    lineHeight: '17px',
    fontSize: 14,
    fontFamily: theme.font,
  },
}));
