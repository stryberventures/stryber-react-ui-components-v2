import { createStyles, toRem } from '../Theme';
import { IAvatar } from '.';

export default () =>
  createStyles(
    (theme) => ({
      avatarContainer: ({ shape }: IAvatar) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.colors.neutralGray.medium300,
        borderRadius: shape === 'circle' ? '50%' : toRem(4),
      }),
      smallAvatar: {
        width: toRem(32),
        height: toRem(32),
      },
      mediumAvatar: {
        width: toRem(40),
        height: toRem(40),
      },
      largeAvatar: {
        width: toRem(48),
        height: toRem(48),
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      status: ({ status, dir }: IAvatar) => ({
        position: 'absolute',
        bottom: 0,
        [dir === 'rtl' ? 'left' : 'right']: 0,
        backgroundColor:
          status === 'online'
            ? theme.colors.success.medium400
            : theme.colors.error.main500,
        borderRadius: '50%',
        border: `${toRem(1.5)} solid ${theme.colors.background.white}`,
      }),
      smallStatus: ({ dir }: IAvatar) => ({
        width: toRem(8),
        height: toRem(8),
        [dir === 'rtl' ? 'left' : 'right']: toRem(-2),
        bottom: toRem(-2),
      }),
      mediumStatus: ({ dir, shape }: IAvatar) => ({
        width: toRem(10),
        height: toRem(10),
        [dir === 'rtl' ? 'left' : 'right']:
          shape === 'circle' ? toRem(-2) : toRem(-4),
        bottom: shape === 'circle' ? toRem(-2) : toRem(-4),
      }),
      largeStatus: ({ dir, shape }: IAvatar) => ({
        width: toRem(12),
        height: toRem(12),
        [dir === 'rtl' ? 'left' : 'right']:
          shape === 'circle' ? toRem(-4) : toRem(-4),
        bottom: shape === 'circle' ? toRem(-2) : toRem(-4),
      }),
      avatarWrapper: {
        position: 'relative',
        display: 'inline-block',
      },
    }),
    { internalUsage: true }
  );
