import { createStyles } from '../../Theme';

export default () => createStyles((theme) => ({
  tableName: {
    padding: [theme.spacing[16], theme.spacing[24]],
    borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
  },
  tableNameText: {
    color: theme.colors.text.headline,
  },
}), { internalUsage: true });
