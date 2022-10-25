import { createStyles } from '../../Theme';
import { ISwitchIcon } from './index';
import toRem from '../../Theme/toRem';


export default createStyles((theme) => ({
  switchIcon: (props: ISwitchIcon) => ({
    width: toRem(44),
    height: toRem(24),
    position: 'relative',
    borderRadius: toRem(12),
    backgroundColor: theme.default.dark,
    '&:not($disabled)': {
      cursor: 'pointer',
    },
    '&:hover $circleHighlight': {
      opacity: 0.3,
    },
    '& $circleHighlight': {
      backgroundColor: theme[props.color!].contrast,
    }
  }),
  disabled: {
    opacity: 0.45,
  },
  checked: (props: ISwitchIcon) => ({
    backgroundColor: theme[props.color!].main,
    '&:hover': {
      backgroundColor: theme[props.color!].dark,
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
    transition: 'transform 0.15s',
  },
  circleContainerChecked: {
    animationName: '$slideRight',
    transform: `translateX(${toRem(20)})`,
  },
  circle: (props: ISwitchIcon) => ({
    position: 'relative',
    height: toRem(20),
    width: toRem(20),
    backgroundColor: theme[props.color!].contrast,
    borderRadius: '50%',
  }),
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
  },
}));
