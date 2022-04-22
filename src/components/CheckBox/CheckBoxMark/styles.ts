import { ITheme } from '../../ThemeProvider/types';
import { ICheckBoxMarkProps } from './index';
import { createStyles } from '../../../styles';

export default createStyles((theme: ITheme) => ({
  checkmark: (props: ICheckBoxMarkProps) => ({
    backgroundColor: theme.primary.contrast,
    border: [1, 'solid', theme.primary.main],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    '& svg': {
      display: 'none',
    },
    '&:hover:not($disabled)': {
      backgroundColor: '#C2C9F1',
      border: [1, 'solid', theme[props.color!].dark],
    },
    '& ~ $disabled, &:hover ~ $disabled': {
      backgroundColor: theme.primary.contrast,
      boxShadow: 'none',
    },
  }),
  disabled: {
    '& svg path': {
      fill: theme.primary.main,
    },
    opacity: 0.45,
    pointerEvents: 'none',
  },
  checked: (props: ICheckBoxMarkProps) => ({
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
      width: 12,
      height: 12,
    },
  },
  medium: {
      height: 18,
      width: 18,
    '& svg': {
      width: 14,
      height: 14,
    },
  },
  shadow: {
    boxShadow: `0px 0px 0px 4px ${theme.primary.light}`,
    '&$checkbox': {
      border: '1px solid #6C84DE',
    },
  },
  square: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: '50%',
  },
}));
