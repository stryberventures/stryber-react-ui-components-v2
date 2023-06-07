import { createStyles } from '../../Theme';

export default () => createStyles((theme) => ({
  tableSection: {
    padding: [theme.spacing[16], theme.spacing[24]],
    borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
  },
}), { internalUsage: true });
