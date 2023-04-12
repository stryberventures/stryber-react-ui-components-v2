import { createStyles, toRem } from '../../Theme';

export default () => createStyles((theme) => ({
  selectedItems: {
    padding: [theme.spacing[12], theme.spacing[24]],
    borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
  },
}), { internalUsage: true });
