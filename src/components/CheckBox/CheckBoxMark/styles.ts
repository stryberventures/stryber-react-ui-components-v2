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
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
      borderColor: theme.colors[props.color!].light200,
    },
    '&:focus:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
      borderColor: theme.colors[props.color!].light200,
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
      borderColor: theme.colors[props.color!].main500,
    },
    '&:not($disabled):hover': {
      backgroundColor: theme.colors[props.color!].medium400,
      borderColor: theme.colors[props.color!].medium400,
      boxShadow: `0px 0px 0px 3px ${theme.colors[props.color!].light100}`,
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
