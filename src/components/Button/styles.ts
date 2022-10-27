import { IButton } from './index';
import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  button: (props: IButton) => ({
    userSelect: 'none',
    outline: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active:not($disabled)': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme[props.color!].light}`,
    },
  }),
  contained: (props: IButton) => ({
    backgroundColor: theme[props.color!].main,
    color: theme[props.color!].contrast,
    '& $icon path': {
      fill: theme[props.color!].contrast,
    },
    '&:hover': {
      backgroundColor: theme[props.color!].dark,
    }
  }),
  outlined: (props: IButton) => ({
    backgroundColor: theme[props.color!].contrast,
    color: theme[props.color!].main,
    border: [toRem(2), 'solid', theme[props.color!].main],
    '& $icon path': {
      fill: theme[props.color!].main,
    },
    '&:hover': {
      backgroundColor: theme[props.color!].light,
    },
    '&$mini': {
      padding: [toRem(2.5), toRem(8)],
    },
    '&$small': {
      padding: [toRem(6), toRem(16)],
    },
    '&$medium': {
      padding: [toRem(14), toRem(24)],
    },
    '&$large': {
      padding: [toRem(22), toRem(32)],
    },
  }),
  disabled: {
    opacity: 0.3,
    pointerEvents: 'none',
  },
  mini: {
    gap: toRem(8),
    padding: `${toRem(4.5)} ${toRem(8)}`,
    fontSize: toRem(10),
    lineHeight: toRem(15),
  },
  small: {
    padding: `${toRem(8)} ${toRem(16)}`,
    gap: toRem(10),
  },
  medium: {
    padding: `${toRem(16)} ${toRem(24)}`,
    gap: toRem(10),
  },
  large: {
    padding: `${toRem(24)} ${toRem(32)}`,
    gap: toRem(14),
  },
  flat: {},
  round: {
    borderRadius: toRem(4),
  },
  circle: {
    borderRadius: toRem(50),
  },
  icon: {
    '$mini &': {
      width: toRem(14),
      height: toRem(14),
    },
    '$small &, $medium &, $large &': {
      width: toRem(20),
      height: toRem(20),
    },
  },
  fullWidth: {
    width: '100%',
  }
}));
