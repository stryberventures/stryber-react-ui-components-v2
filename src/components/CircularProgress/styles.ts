import { createStyles } from '../Theme';
import { ICircularProgress } from './index';

export default () => createStyles((theme) => ({
  '@keyframes animation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    }
  },
  '@keyframes circleAnimation': {
    '0%': {
      strokeDasharray: '1px,200px',
      strokeDashoffset: 0,
    },
    '50%': {
      strokeDasharray: '100px,200px',
      strokeDashoffset: -15,
    },
    '100%': {
      strokeDasharray: '100px,200px',
      strokeDashoffset: -125,
    }
  },
  root: (props: ICircularProgress) => ({
    width: props.size,
    height: props.size,
    display: 'inline-block',
    color: theme.colors[props.color!].main500,
    transform: props.variant === 'determinate' ? 'rotate(-90deg)' : undefined,
    animation: props.variant === 'indeterminate' ? '1.4s linear 0s infinite normal none running $animation' : undefined,
  }),
  svg: {
    display: 'block',
  },
  circle: (props: ICircularProgress) =>  ({
    stroke: 'currentColor',
    strokeDasharray: '80px,200px',
    strokeDashoffset: 0,
    strokeLinecap: props.shape === 'round' ? 'round' : 'butt',
    animation: props.variant === 'indeterminate' ? '$circleAnimation 1.4s ease-in-out infinite' : undefined,
    transition: 'stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  }),
}), { internalUsage: true });
