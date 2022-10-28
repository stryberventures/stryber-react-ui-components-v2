import { ICheckBoxMark } from './index';
import { createStyles } from '../../Theme';
import toRem from '../../../utils/toRem';


export default createStyles((theme) => ({
  checkboxMark: (props: ICheckBoxMark) => ({
    backgroundColor: theme[props.color!].contrast,
    border: [toRem(1), 'solid', theme[props.color!].main],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme[props.color!].light,
      border: [toRem(1), 'solid', theme[props.color!].dark],
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme[props.color!].contrast,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      outline: `${toRem(4)} solid ${theme[props.color!].light}`,
    },
  }),
  clickArea: {
    position: 'absolute',
    width: toRem(26),
    height: toRem(26),
  },
  disabled: (props: ICheckBoxMark) => ({
    '& svg path': {
      fill: theme[props.color!].main,
    },
    opacity: 0.45,
    pointerEvents: 'none',
    backgroundColor: theme.background.disabled,
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
    height: toRem(14),
    width: toRem(14),
    minWidth: toRem(14),
    '& svg': {
      width: toRem(12),
      height: toRem(12),
    },
  },
  medium: {
    height: toRem(18),
    width: toRem(18),
    minWidth: toRem(18),
    '& svg': {
      width: toRem(14),
      height: toRem(14),
    },
  },
  square: {
    borderRadius: toRem(4),
  },
  circle: {
    borderRadius: '50%',
  },
}), { internalUsage: true });
