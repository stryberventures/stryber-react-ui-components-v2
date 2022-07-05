import { ITheme } from '../../Theme/types';
import { IRadioBoxMarkProps } from './index';
import { createStyles } from '../../Theme';

export default createStyles((theme: ITheme) => ({
  radiomark: (props: IRadioBoxMarkProps) => ({
    backgroundColor: theme[props.color!].contrast,
    border: [1, 'solid', theme[props.color!].main],
    borderRadius: '50%',
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
  disabled: (props: IRadioBoxMarkProps) => ({
    '& svg circle': {
      fill: theme[props.color!].main,
    },
    opacity: 0.45,
    cursorEvents: 'none',
  }),
  clickArea: {
    position: 'absolute',
    width: 26,
    height: 26,
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
    height: 14,
    width: 14,
    minWidth: 14,
    '& svg': {
      width: 6,
      height: 6,
    },
  },
  medium: {
    height: 18,
    width: 18,
    minWidth: 18,
    '& svg': {
      width: 8,
      height: 8,
    },
  },
}));
