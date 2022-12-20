import { ICheckBoxMark } from './index';
import { createStyles } from '../../Theme';
import toRem from '../../../utils/toRem';


export default createStyles((theme) => ({
  checkboxMark: (props: ICheckBoxMark) => ({
    backgroundColor: theme.colors.contrast.white,
    border: [toRem(1), 'solid', theme.colors[props.color!].main500],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors[props.color!].extraLight50,
      border: [toRem(1), 'solid', theme.colors[props.color!].dark600],
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme.colors.contrast.white,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      outline: `${toRem(4)} solid ${theme.colors[props.color!].extraLight50}`,
    },
  }),
  clickArea: {
    position: 'absolute',
    width: toRem(26),
    height: toRem(26),
  },
  disabled: (props: ICheckBoxMark) => ({
    '& svg path': {
      fill: theme.colors[props.color!].main500,
    },
    opacity: 0.45,
    pointerEvents: 'none',
    backgroundColor: theme.colors.background.extraLightGrey,
  }),
  checked: (props: ICheckBoxMark) => ({
    '& svg': {
      display: 'block',
    },
    '&:not($disabled)': {
      backgroundColor: theme.colors[props.color!].main500,
    },
    '&:not($disabled):hover': {
      backgroundColor: theme.colors[props.color!].dark600,
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
