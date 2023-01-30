import { ICheckBoxMark } from './index';
import { createStyles } from '../../Theme';
import toRem from '../../../utils/toRem';


export default createStyles((theme) => ({
  checkboxMark: (props: ICheckBoxMark) => ({
    backgroundColor: theme.colors.contrast.white,
    border: [toRem(1), 'solid', theme.colors.neutralGray.dark600],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    '& *, & *:after, & *:before': {
      boxSizing: 'inherit',
    },
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled), &:focus': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
      borderColor: theme.colors[props.color!].light200,
    },
    '&:focus:not($disabled):not(:hover)': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
      borderColor: theme.colors[props.color!].light200,
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme.colors.contrast.white,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      border: `${toRem(1)} solid ${theme.colors.neutralGray.dark600}`,
      backgroundColor: theme.colors.neutralGray.light200,
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
      borderColor: theme.colors[props.color!].main500,
    },
    '&:not($disabled):hover:not(:active)': {
      backgroundColor: theme.colors[props.color!].medium400,
      borderColor: theme.colors[props.color!].medium400,
      boxShadow: `0px 0px 0px 3px ${theme.colors[props.color!].light100}`,
    },
    '&:not($disabled):hover:active': {
      boxShadow: 'none',
      backgroundColor: theme.colors[props.color!].medium400,
      borderColor: theme.colors[props.color!].medium400,
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
    height: toRem(20),
    width: toRem(20),
    minWidth: toRem(20),
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
