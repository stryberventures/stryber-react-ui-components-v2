import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  menuItem: {
    padding: [0, 8],
    '&:hover': {
      backgroundColor: theme.default.extraLight,
    }
  },
}));
