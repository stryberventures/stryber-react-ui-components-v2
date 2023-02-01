import { ITheme } from '../../Theme/types';
import { IRadioBoxMarkProps } from './index';
import { createStyles, toRem } from '../../Theme'


export default createStyles((theme: ITheme) => ({
  radioBoxMark: (props: IRadioBoxMarkProps) => ({
    backgroundColor: theme.colors.background.white,
    border: [toRem(1), 'solid', theme.colors[props.color!].main500],
    borderRadius: '50%',
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
      backgroundColor: theme.colors.background.white,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      outline: `${toRem(4)} solid ${theme.colors[props.color!].extraLight50}`,
    },
  }),
  disabled: (props: IRadioBoxMarkProps) => ({
    '& svg circle': {
      fill: theme.colors[props.color!].main500,
    },
    opacity: 0.45,
    cursorEvents: 'none',
    backgroundColor: theme.colors.neutralGray.extraLight50,
  }),
  clickArea: {
    position: 'absolute',
    width: toRem(26),
    height: toRem(26),
  },
  checked: (props: IRadioBoxMarkProps) => ({
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
      width: toRem(6),
      height: toRem(6),
    },
  },
  medium: {
    height: toRem(18),
    width: toRem(18),
    minWidth: toRem(18),
    '& svg': {
      width: toRem(8),
      height: toRem(8),
    },
  },
}), { internalUsage: true });
