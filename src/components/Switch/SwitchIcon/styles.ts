import { ISwitchIcon } from './index';
import { createStyles, toRem } from '../../../components/Theme';

export default createStyles((theme) => ({
  switchIcon: (props: ISwitchIcon) => ({
    position: 'relative',
    borderRadius: toRem(12),
    backgroundColor: theme.colors.neutralGray.medium400,
    '&:not($disabled)': {
      cursor: 'pointer',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.medium300,
      boxShadow: `0px 0px 0px 3px ${theme.colors[props.color!].light100}`,
    },
    '&:active:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.light200,
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.light200,
    },
  }),
  medium: {
    minWidth: toRem(44),
    width: toRem(44),
    minHeight: toRem(24),
    height: toRem(24),
    '& $circle': {
      height: toRem(20),
      width: toRem(20),
    },
    '& $circleContainerChecked': {
      transform: `translateX(${toRem(20)})`,
    }
  },
  small: {
    minWidth: toRem(29),
    width: toRem(29),
    minHeight: toRem(17),
    height: toRem(17),
    '& $circle': {
      height: toRem(13),
      width: toRem(13),
    },
    '& $circleContainerChecked': {
      transform: `translateX(${toRem(12)})`,
    }
  },
  disabled: {
    '& $label': {
      color: theme.colors.text.disabled,
    }
  },
  checked: (props: ISwitchIcon) => ({
    backgroundColor: theme.colors[props.color!].main500,
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors[props.color!].medium400,
    },
    '&:active:not($disabled)': {
      backgroundColor: theme.colors[props.color!].medium300,
    },
  }),
  '@keyframes slideLeft': {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },
  },
  '@keyframes slideRight': {
    from: { transform: 'translateX(0%)' },
    to: { transform: 'translateX(100%)' },
  },
  circleContainer: {
    top: toRem(2),
    left: toRem(2),
    position: 'absolute',
    animationName: '$slideLeft',
    transition: 'transform 0.3s',
  },
  circleContainerChecked: {
    animationName: '$slideRight',
  },
  circle: {
    position: 'relative',
    backgroundColor: theme.colors.background.white,
    borderRadius: '50%',
  },
  circleHighlight: {
    content: '""',
    position: 'absolute',
    height: toRem(30),
    width: toRem(30),
    marginTop: toRem(-5),
    marginLeft: toRem(-5),
    opacity: 0,
    borderRadius: '50%',
    transition: 'opacity 0.15s',
    border: 'none',
    outline: 'none',
  },
}));
