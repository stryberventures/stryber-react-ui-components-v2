import { ITheme } from '../../Theme/types';
import { IRadioBoxMarkProps } from './index';
import { createStyles, toRem } from '../../Theme'


export default createStyles((theme: ITheme) => ({
  radioBoxMark: (props: IRadioBoxMarkProps) => ({
    backgroundColor: theme.colors.background.white,
    border: [toRem(1), 'solid', theme.colors[props.color == 'error' ? props.color : 'neutralGray'].dark600],
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: toRem(22),
    width: toRem(22),
    minWidth: toRem(22),
    transition: 'background-color .3s ease-out, border-color .3s ease-out, box-shadow .3s ease-out',
    '& *, & *:after, & *:before': {
      boxSizing: 'inherit',
    },
    '&:hover:not($disabled)': {
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
  checked: (props: IRadioBoxMarkProps) => ({
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.medium300,
      borderColor: theme.colors.neutralGray.medium300,
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
      backgroundColor: theme.colors[props.color!].medium300,
      borderColor: theme.colors[props.color!].medium300,
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
  radioBoxIcon: {
    width: toRem(8),
    height: toRem(8),
    backgroundColor: theme.colors.contrast.white,
    borderRadius: '50%',
  },
}), { internalUsage: true });
