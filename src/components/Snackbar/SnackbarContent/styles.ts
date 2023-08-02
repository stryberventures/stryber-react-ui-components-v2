import { createStyles, toRem } from '../../Theme';
import { ISnackbarContentProps } from './index';

interface ISnackbarStylesProps extends Omit<ISnackbarContentProps, 'color'> {
  color: 'success' | 'error' | 'warning' | 'primary' | null;
}

export default () =>
  createStyles(
    (theme) => ({
      snackbarContent: ({ color }: ISnackbarStylesProps) => ({
        display: 'flex',
        borderRadius: toRem(8),
        border: color
          ? `1px solid ${theme.colors[color].medium300}`
          : theme.colors.neutralGray.extraDark900,
        color: color
          ? theme.colors[color].dark600
          : theme.colors.contrast.white,
        padding: toRem(16),
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: color
          ? theme.colors[color].extraLight50
          : theme.colors.neutralGray.extraDark900,
      }),
      mainContent: {
        display: 'flex',
        alignItems: 'center',
      },
      symbol: ({ description, dir }: ISnackbarStylesProps) => ({
        alignSelf: description ? 'flex-start' : 'center',
        [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(12),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }),
      message: {
        display: 'flex',
        flexDirection: 'column',
        gap: toRem(4),
      },
      icon: {
        fill: theme.colors.primary.main500,
      },
      closeIcon: {
        width: 20,
        height: 20,
        cursor: 'pointer',
      },
      '@media (max-width: 420px)': {
        mainContent: {
          flexDirection: 'column',
        },
        symbol: {
          marginBottom: toRem(12),
        },
      },
      title: {
        lineHeight: toRem(17),
      },
      description: {
        lineHeight: toRem(17),
      },
    }),
    { internalUsage: true }
  );
