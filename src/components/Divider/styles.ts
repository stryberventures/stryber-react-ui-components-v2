import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  divider: {
    display: 'block',
    borderBottom: `1px solid ${theme.colors.neutralGray.light200}`,
  },
}));
