import { ITheme } from '../../Theme/types';
import { IRadioBoxMarkProps } from './index';
import { createStyles } from '../../Theme';
import toRem from '../../../utils/toRem'


export default createStyles((theme: ITheme) => ({
  radioBoxMark: (props: IRadioBoxMarkProps) => ({
    backgroundColor: theme[props.color!].contrast,
    border: [toRem(1), 'solid', theme[props.color!].main],
    borderRadius: '50%',
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
  disabled: (props: IRadioBoxMarkProps) => ({
    '& svg circle': {
      fill: theme[props.color!].main,
    },
    opacity: 0.45,
    cursorEvents: 'none',
    backgroundColor: theme.background.disabled,
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
}));
