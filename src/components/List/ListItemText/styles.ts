import { createStyles } from '../../Theme';
import { IListItemText } from './index';

export default () =>
  createStyles(
    (theme) => ({
      label: ({ disabled }: IListItemText) => ({
        color: disabled
          ? theme.colors.text.disabled
          : theme.colors.text.secondary,
        fontSize: 12,
        height: 14,
      }),
      primary: ({ disabled }: IListItemText) => ({
        color: disabled
          ? theme.colors.text.disabled
          : theme.colors.text.headline,
        height: 24,
        fontWeight: 400,
      }),
      secondary: ({ disabled }: IListItemText) => ({
        color: disabled
          ? theme.colors.text.disabled
          : theme.colors.text.secondary,
        height: 20,
      }),
      listItemText: {
        display: 'flex',
        alignItems: 'center',
      },
    }),
    { internalUsage: true }
  );
