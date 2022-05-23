import { createStyles } from '../../../styles';
import { IToggleIcon } from './index';

export default createStyles((theme) => ({
  toggleIcon: (props: IToggleIcon) => ({
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
  checked: (props: IToggleIcon) => ({
    backgroundColor: theme[props.color!].main,
    '&:hover': {
      backgroundColor: theme[props.color!].dark,
    },
    '& $circleContainer': {
      transform: 'translate(20px)',
    },
    '& $circleHighlight': {
      backgroundColor: theme[props.color!].main,
    }
  }),
  circleContainer: {
    transition: 'transform 0.15s',
    top: '2px',
    left: '2px',
    position: 'absolute',
  },
  circle: (props: IToggleIcon) => ({
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
