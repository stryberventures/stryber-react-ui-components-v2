import { createStyles } from '../Theme';
import { ILinearProgress } from './index';

export default () => createStyles((theme) => ({
  root: {
    width: '100%'
  },
  progressContainer: (props: ILinearProgress) => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    height: 4,
    zIndex: 0,
    backgroundColor: theme.colors[props.color!].light100,
    borderRadius: props.shape === 'round' ? 4 : 0,
  }),
  '@keyframes animation': {
    '0%': {
      left: '-35%',
      right: '100%',
    },
    '60%': {
      left: '100%',
      right: '-90%',
    },
    '100%': {
      left: '100%',
      right: '-90%',
    }
  },
  '@keyframes animation2': {
    '0%': {
      left: '-200%',
      right: '100%',
    },
    '60%': {
      left: '107%',
      right: '-8%',
    },
    '100%': {
      left: '107%',
      right: '-8%',
    }
  },
  progressLine: (props: ILinearProgress) => ({
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    transformOrigin: 'left center',
    backgroundColor: theme.colors[props.color!].main500,
  }),
  spinningLine: {
    transition: 'transform 0.2s linear 0s',
    width: 'auto',
  },
  firstSpinningLine: {
    animation: '2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal none running $animation',
  },
  secondSpinningLine: {
    animation: '2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none running $animation2',
  },
  determinateLine: {
    width: '100%',
    transition: 'transform 0.4s linear 0s',
  },
}), { internalUsage: true });
