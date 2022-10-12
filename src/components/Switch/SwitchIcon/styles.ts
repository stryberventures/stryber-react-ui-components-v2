import { createStyles } from '../../Theme';
import { ISwitchIcon } from './index';

export default createStyles((theme) => ({
  switchIcon: (props: ISwitchIcon) => ({
    width: 44,
    height: 24,
    position: 'relative',
    borderRadius: 12,
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
    top: '2px',
    left: '2px',
    position: 'absolute',
    animationName: '$slideLeft',
    transition: 'transform 0.15s',
  },
  circleContainerChecked: {
    animationName: '$slideRight',
    transform: 'translateX(20px)',
  },
  circle: (props: ISwitchIcon) => ({
    position: 'relative',
    height: 20,
    width: 20,
    backgroundColor: theme[props.color!].contrast,
    borderRadius: '50%',
  }),
  circleHighlight: {
    content: '""',
    position: 'absolute',
    height: 30,
    width: 30,
    marginTop: -5,
    marginLeft: -5,
    opacity: 0,
    borderRadius: '50%',
    transition: 'opacity 0.15s',
  },
}));
