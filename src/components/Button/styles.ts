import { IButton } from './index';
import { createStyles, toRem } from '../../components/Theme';

export default createStyles((theme) => ({
  button: (props: IButton) => ({
    boxSizing: 'border-box',
    fontFamily: theme.font,
    userSelect: 'none',
    outline: 'none',
    border: `${props.size == 'mini' ? 1 : 1.5}px solid transparent`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color .3s ease-out, border-color .3s ease-out',
    lineHeight: '150%',
    '-webkit-tap-highlight-color': 'transparent',
    '*': {
      boxSizing: 'inherit',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  contained: (props: IButton) => ({
    backgroundColor: theme.colors[props.color!].main500,
    borderColor: theme.colors[props.color!].main500,
    color: theme.colors.contrast.white,
    '& $icon path': {
      fill: theme.colors.contrast.white,
    },
    '&:hover:not($disabled), &:focus:not($disabled)': {
      backgroundColor: theme.colors[props.color!].medium400,
      borderColor: theme.colors[props.color!].medium400,
    },
    '&:active:not($disabled)': {
      backgroundColor: theme.colors[props.color!].medium300,
      borderColor: theme.colors[props.color!].medium300,
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.light200,
      borderColor: theme.colors.neutralGray.light200,
    }
  }),
  outlined: (props: IButton) => ({
    backgroundColor: theme.colors.contrast.white,
    color: theme.colors[props.color!].main500,
    borderColor: theme.colors[props.color!].main500,
    '& $icon path': {
      fill: theme.colors[props.color!].main500,
    },
    '&:hover:not($disabled), &:focus:not($disabled)': {
      backgroundColor: theme.colors[props.color!].extraLight50,
    },
    '&:active:not($disabled)': {
      backgroundColor: theme.colors[props.color!].light100,
    },
    '&$disabled': {
      color: theme.colors.neutralGray.medium300,
      borderColor: theme.colors.neutralGray.medium300,
      '& $icon path': {
        fill: theme.colors.neutralGray.medium300,
      },
    },
  }),
  ghost: (props: IButton) => ({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: theme.colors[props.color!].main500,
    '& $icon path': {
      fill: theme.colors[props.color!].main500,
    },
    '&:hover:not($disabled), &:focus:not($disabled)': {
      backgroundColor: theme.colors[props.color!].extraLight50,
      borderColor: theme.colors[props.color!].extraLight50,
    },
    '&:active:not($disabled)': {
      backgroundColor: theme.colors[props.color!].light100,
      borderColor: theme.colors[props.color!].light100,
    },
    '&$disabled': {
      color: theme.colors.neutralGray.medium300,
      '& $icon path': {
        fill: theme.colors.neutralGray.medium300,
      },
    },
  }),
  disabled: {
    pointerEvents: 'none',
  },
  mini: (props: IButton) => ({
    gap: toRem(6),
    padding: `${toRem(4)} ${toRem(props.icon ? 4 : 8)}`,
  }),
  small: (props: IButton) => ({
    padding: `${toRem(8)} ${toRem(props.icon ? 8 : 16)}`,
    gap: toRem(10),
  }),
  medium: {
    padding: `${toRem(16)}`,
    gap: toRem(10),
  },
  large: (props: IButton) => ({
    padding: `${toRem(24)} ${toRem(props.icon ? 24 : 32)}`,
    gap: toRem(10),
  }),
  square: {},
  round: {
    borderRadius: toRem(4),
  },
  circle: {
    borderRadius: toRem(50),
  },
  icon: {
    '$mini &': {
      width: 'auto',
      height: toRem(14),
    },
    '$small &, $medium &, $large &': {
      width: 'auto',
      height: toRem(20),
    },
  },
  fullWidth: {
    width: '100%',
  }
}), { internalUsage: true });
