import { createStyles, toRem } from '../Theme';
import { IInput } from './index';

export default createStyles((theme) => ({
  inputRoot: {
    width: toRem(320),
  },
  fullWidth: {
    width: '100%',
  },
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    borderRadius: toRem(4),
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: [toRem(4), toRem(14)],
    height: toRem(props.mobile ? 56 : 48),
    backgroundColor: theme.colors.background.white,
    border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    '&:focus-within:not($disabled)': {
      border: `${toRem(2)} solid ${theme.colors[props.color!].main500}`,
      paddingLeft: toRem(13),
      paddingRight: toRem(13),
      boxShadow: `0px 0px 0px ${toRem(2)} #fff, 0 0 0 ${toRem(4)} ${theme.colors[props.color!].light200}`,
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
    },
    '&$highlighted': {
      boxShadow: `0px 0px 0px ${toRem(2)} #fff, 0 0 0 ${toRem(4)} ${theme.colors[props.color!].light200}`,
    }
  }),
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  highlighted: {},
  inputContainerError: () => ({
    border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    '&:focus-within': {
      border: `${toRem(2)} solid ${theme.colors.error.main500}`,
    }
  }),
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(24),
    padding: 0,
    width: '100%',
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    '&::placeholder': {
      color: theme.colors.text.disabled,
    },
    '&[disabled]': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
    }
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  prefix: {
    fontSize: toRem(16),
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    whiteSpace: 'pre',
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing['8'],
    color: theme.colors.text.headline,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'default',
    }
  },
  labelMobile: {
    marginBottom: 0,
    color: theme.colors.text.secondary,
  },
  textDisabled: {
    color: theme.colors.text.disabled,
    '&::placeholder': {
      color: theme.colors.text.disabled,
    }
  },
  message: {
    marginTop: toRem(8),
  },
  withLabel: {},
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  mobileInputWrapper: {
    height: 0,
    transition: 'height 0.2s, padding 0.2s',
    overflow: 'hidden',
  },
  mobileInputWrapperInUse: {
    height: toRem(24),
    paddingTop: toRem(2),
  }
}), { internalUsage: true });
