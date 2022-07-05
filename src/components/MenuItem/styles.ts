import { createStyles } from '../Theme/index';

export default createStyles((theme) => ({
  menuItem: {
    padding: [0, 8],
    '&:hover': {
      backgroundColor: theme.default.extraLight,
    }
  },
}));
