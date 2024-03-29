import { createStyles, toRem } from '../Theme';
import { ITabs } from './index';

export default () =>
  createStyles(
    (theme) => ({
      wrapper: (props: ITabs) => ({
        direction: props.dir || 'inherit',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
        '& *, *:after, *:before': {
          boxSizing: 'inherit',
        },
        '&:after': {
          display: 'block',
          position: 'absolute',
          content: '""',
          bottom: 0,
          left: 0,
          width: '100%',
          height: toRem(1),
          backgroundColor: theme.colors.neutralGray.light200,
        },
        '&$vertical': {
          '&:after': {
            top: 0,
            [props.dir === 'rtl' ? 'right' : 'left']: 0,
            width: toRem(1),
            height: '100%',
          },
        },
      }),
      tabs: {
        overflow: 'scroll',
        maxWidth: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        alignItems: 'stretch',
        '&::-webkit-scrollbar': {
          width: 0,
          height: 0,
        },
        '&$vertical': {
          width: 'fit-content',
          flexDirection: 'column',
        },
      },
      vertical: {},
    }),
    { internalUsage: true }
  );
