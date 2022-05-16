import { ICheckBoxMark } from './index';
import { createStyles } from '../../../styles';

export default createStyles((theme) => ({
  checkmark: (props: ICheckBoxMark) => ({
    backgroundColor: theme[props.color!].contrast,
    border: [1, 'solid', theme[props.color!].main],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme[props.color!].light,
      border: [1, 'solid', theme[props.color!].dark],
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme[props.color!].contrast,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      outline: `4px solid ${theme[props.color!].light}`,
    },
  }),
  disabled: (props: ICheckBoxMark) => ({
    '& svg path': {
      fill: theme[props.color!].main,
    },
    opacity: 0.45,
    pointerEvents: 'none',
  }),
  checked: (props: ICheckBoxMark) => ({
    '& svg': {
      display: 'block',
    },
    '&:not($disabled)': {
      backgroundColor: theme[props.color!].main,
    },
    '&:not($disabled):hover': {
      backgroundColor: theme[props.color!].dark,
    },
  }),
  small: {
    height: 14,
    width: 14,
    minWidth: 14,
    '& svg': {
      width: 12,
      height: 12,
    },
  },
  medium: {
    height: 18,
    width: 18,
    minWidth: 18,
    '& svg': {
      width: 14,
      height: 14,
    },
  },
  square: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: '50%',
  },
}));
