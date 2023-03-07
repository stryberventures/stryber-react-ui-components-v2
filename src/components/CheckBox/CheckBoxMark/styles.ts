import { ICheckBoxMark } from './index';
import { createStyles, toRem } from '../../Theme';


export default () => createStyles((theme) => ({
  checkboxMark: (color: ICheckBoxMark['color']) => ({
    backgroundColor: theme.colors.contrast.white,
    border: [toRem(1), 'solid', theme.colors[color == 'error' ? color : 'neutralGray'].dark600],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: toRem(20),
    width: toRem(20),
    minWidth: toRem(20),
    transition: 'background-color .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out',
    '& *, & *:after, & *:before': {
      boxSizing: 'inherit',
    },
    '& svg': {
      display: 'none',
      width: toRem(14),
      height: toRem(14),
    },
    '&:hover:not($disabled)': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
      borderColor: theme.colors[color!].light200,
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
  checked: (color: ICheckBoxMark['color']) => ({
    '& svg': {
      display: 'block',
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.medium300,
      borderColor: theme.colors.neutralGray.medium300,
    },
    '&:not($disabled)': {
      backgroundColor: theme.colors[color!].main500,
      borderColor: theme.colors[color!].main500,
    },
    '&:not($disabled):hover:not(:active)': {
      backgroundColor: theme.colors[color!].medium400,
      borderColor: theme.colors[color!].medium400,
      boxShadow: `0px 0px 0px 3px ${theme.colors[color!].extraLight50}`,
    },
    '&:not($disabled):hover:active': {
      boxShadow: 'none',
      backgroundColor: theme.colors[color!].medium300,
      borderColor: theme.colors[color!].medium300,
    },
  }),
  indeterminate: () => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    '&:after': {
      display: 'block',
      width: toRem(9),
      height: toRem(1),
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      backgroundColor: 'white',
      content: '""',
    },
    '&$disabled': {
      borderColor: theme.colors.neutralGray.medium300,
    },
  }),
  disabled: {
    cursorEvents: 'none',
    backgroundColor: theme.colors.neutralGray.medium300,
    borderColor: theme.colors.neutralGray.medium300,
    '&:not($checked)': {
      backgroundColor: 'transparent',
      borderColor: theme.colors.neutralGray.medium300,
    },
  },
  clickArea: {
    position: 'absolute',
    width: toRem(32),
    height: toRem(32),
  },
  square: {
    borderRadius: toRem(4),
  },
  circle: {
    borderRadius: '50%',
  },
}), { internalUsage: true });
