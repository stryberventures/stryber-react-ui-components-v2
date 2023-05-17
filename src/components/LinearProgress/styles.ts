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
  '@keyframes animationRTL': {
    '0%': {
      right: '-35%',
      left: '100%',
    },
    '60%': {
      right: '100%',
      left: '-90%',
    },
    '100%': {
      right: '100%',
      left: '-90%',
    }
  },
  '@keyframes animation2RTL': {
    '0%': {
      right: '-200%',
      left: '100%',
    },
    '60%': {
      right: '107%',
      left: '-8%',
    },
    '100%': {
      right: '107%',
      left: '-8%',
    }
  },
  progressLine: (props: ILinearProgress) => ({
    position: 'absolute',
    [props.dir === 'rtl' ? 'right' : 'left']: 0,
    bottom: 0,
    top: 0,
    transformOrigin: `${props.dir === 'rtl' ? 'right' : 'left'} center`,
    backgroundColor: theme.colors[props.color!].main500,
  }),
  spinningLine: {
    transition: 'transform 0.2s linear 0s',
    width: 'auto',
  },
  firstSpinningLine: (props: ILinearProgress) => ({
    animation: `2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) 0s infinite normal none running ${props.dir === 'rtl' ? '$animationRTL' : '$animation'}`,
  }),
  secondSpinningLine: (props: ILinearProgress) => ({
    animation: `2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite normal none running  ${props.dir === 'rtl' ? '$animation2RTL' : '$animation2'}`,
  }),
  determinateLine: {
    width: '100%',
    transition: 'transform 0.4s linear 0s',
  },
}), { internalUsage: true });
