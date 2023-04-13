import { ISwitchIcon } from './index';
import { createStyles, toRem } from '../../Theme';

export default createStyles((theme) => ({
  switchIcon: (color: ISwitchIcon['color']) => ({
    position: 'relative',
    borderRadius: toRem(12),
    minWidth: toRem(36),
    width: toRem(36),
    minHeight: toRem(20),
    height: toRem(20),
    backgroundColor: theme.colors.neutralGray.medium400,
    transition: 'background-color .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out',
    boxSizing: 'border-box',
    '& *, & *:after, & *:before': {
      boxSizing: 'inherit',
    },
    '& $circle': {
      height: toRem(16),
      width: toRem(16),
    },
    '& $circleContainerChecked': {
      transform: 'translateX(100%)',
    },
    '&:not($disabled)': {
      cursor: 'pointer',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.medium300,
      boxShadow: `0px 0px 0px 3px ${theme.colors[color!].extraLight50}`,
    },
    '&:not($disabled):not($checked):hover:active': {
      backgroundColor: theme.colors.neutralGray.medium300,
      boxShadow: 'none',
    },
  }),
  checked: (color: ISwitchIcon['color']) => ({
    backgroundColor: theme.colors[color!].main500,
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors[color!].medium400,
    },
    '&:not($disabled):hover:active': {
      backgroundColor: theme.colors[color!].medium300,
      boxShadow: 'none',
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.light200,
    },
  }),
  disabled: {
    '& $label': {
      color: theme.colors.text.disabled,
    }
  },
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
