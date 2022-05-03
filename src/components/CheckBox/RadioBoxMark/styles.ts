import { ITheme } from '../../ThemeProvider/types';
import { IRadioBoxMarkProps } from './index';
import { createStyles } from '../../../styles';

export default createStyles((theme: ITheme) => ({
  radiomark: (props: IRadioBoxMarkProps) => ({
    backgroundColor: theme.primary.contrast,
    border: [1, 'solid', theme.primary.main],
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme[props.color!].mainLight,
      border: [1, 'solid', theme[props.color!].dark],
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme.primary.contrast,
      boxShadow: 'none',
    },
    '&:active:not($disabled)': {
      outline: `4px solid ${theme.primary.light}`,
    },
  }),
  disabled: {
    '& svg circle': {
      fill: theme.primary.main,
    },
    opacity: 0.45,
    cursorEvents: 'none',
  },
  checked: (props: IRadioBoxMarkProps) => ({
    '& svg': {
      display: 'block',
    },
    '&:not($disabled)': {
      backgroundColor: theme.primary.main,
    },
    '&:not($disabled):hover': {
      backgroundColor: theme[props.color!].dark,
    },
  }),
  small: {
      height: 14,
      width: 14,
    '& svg': {
      width: 6,
      height: 6,
    },
  },
  medium: {
      height: 18,
      width: 18,
    '& svg': {
      width: 8,
      height: 8,
    },
  },
}));
