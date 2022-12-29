import { IButton } from './index';
import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

export default createStyles((theme) => ({
  button: {
    fontFamily: theme.font,
    userSelect: 'none',
    outline: 'none',
    border: '1.5px solid transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color .3s ease-out, border-color .3s ease-out',
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  },
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
    border: [toRem(1.5), 'solid', theme.colors[props.color!].main500],
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
    gap: toRem(8),
    padding: `${toRem(props.icon ? 6 : 4.5)} ${toRem(props.icon ? 6 : 8)}`,
    fontSize: toRem(10),
    lineHeight: toRem(15),
  }),
  small: (props: IButton) => ({
    padding: `${toRem(props.icon ? 10 : 10)} ${toRem(props.icon ? 10 : 18)}`,
    gap: toRem(10),
  }),
  medium: (props: IButton) => ({
    padding: `${toRem(props.icon ? 10 : 18)} ${toRem(props.icon ? 10 : 18)}`,
    gap: toRem(10),
  }),
  large: (props: IButton) => ({
    padding: `${toRem(props.icon ? 10 : 26)} ${toRem(props.icon ? 10 : 34)}`,
    gap: toRem(14),
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
