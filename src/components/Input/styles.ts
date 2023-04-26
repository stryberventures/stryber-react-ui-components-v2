import { createStyles, toRem } from '../Theme';
import { IInput } from './index';

export default () => createStyles((theme) => ({
  inputRoot: (props: IInput) => ({
    direction: props.dir || 'inherit',
    width: toRem(320),
  }),
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
    padding: [toRem(8), toRem(12)],
    height: toRem(props.variant === 'floatingLabel' ? 56 : 48),
    border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    backgroundColor: theme.colors.background.white,
    transition: 'border-color .3s, box-shadow .3s',
    '&:hover, &:hover $input': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
    '&:hover:not($disabled):not($inputContainerError)': {
      border: `${toRem(1)} solid ${theme.colors[props.color!].medium400}`,
    },
    '&:focus-within, &:focus-within $input': {
      backgroundColor: theme.colors.background.white,
    },
    '&:focus-within:not($disabled):not($inputContainerError)': {
      border: `${toRem(1)} solid ${theme.colors[props.color!].main500}`,
      boxShadow: `0 0 0 ${toRem(1)} ${theme.colors[props.color!].main500}`,
    },
    '&$disabled': {
      backgroundColor: theme.colors.background.extraLightGrey,
      '& svg path': {
        fill: theme.colors.neutralGray.light200,
      },
    },
  }),
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  inputContainerError: () => ({
    border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    '&:focus-within': {
      border: `${toRem(1)} solid ${theme.colors.error.main500}`,
      boxShadow: `0 0 0 ${toRem(1)} ${theme.colors.error.main500}`,
    },
  }),
  input: {
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    height: toRem(24),
    padding: 0,
    width: '100%',
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      appearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '&::placeholder': {
      color: theme.colors.text.disabled,
    },
    '&[disabled]': {
      backgroundColor: theme.colors.background.extraLightGrey,
    }
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexGrow: 1,
  },
  prefix: {
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    whiteSpace: 'pre',
  },
  postfix: {
    color: theme.colors.text.secondary,
    backgroundColor: theme.colors.background.white,
    whiteSpace: 'pre',
    marginLeft: toRem(10),
  },
  label: (props: IInput) => ({
    display: 'block',
    textAlign: props.dir === 'rtl' ? 'right' : 'left',
    marginBottom: theme.spacing['8'],
    color: theme.colors.text.headline,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'default',
    }
  }),
  floatingLabel: {
    marginBottom: 0,
    color: theme.colors.text.secondary,
    transition: 'font-size 0.2s',
  },
  textDisabled: {
    color: theme.colors.text.disabled,
    '&::placeholder': {
      color: theme.colors.text.disabled,
    }
  },
  withPaddingLeft: {
    paddingLeft: toRem(12),
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
  floatingLabelInputWrapper: {
    height: 0,
    transition: 'height 0.2s, padding 0.2s, opacity 0.3s',
    overflow: 'hidden',
    opacity: 0,
  },
  floatingLabelInputWrapperInUse: {
    height: toRem(24),
    paddingTop: toRem(2),
    opacity: 1,
  },
  clearButton: {
    width: 20,
    height: 20,
    marginLeft: toRem(10),
    backgroundColor: 'white',
    '&:hover': {
      cursor: 'pointer',
    }
  },
}), { internalUsage: true });
