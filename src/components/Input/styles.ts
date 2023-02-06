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
    alignItems: 'center',
    padding: [toRem(4), toRem(8)],
    height: toRem(44),
    backgroundColor: theme.colors.background.white,
    '&:focus-within:not($inputContainerError), &:not($inputContainerError)$highlighted': {
      border: `1px solid ${theme.colors[props.color!].main500}`,
      boxShadow: `0 0 0 ${toRem(4)} ${theme.colors[props.color!].extraLight50}`,
    },
    '&:not($inputContainerError)': {
      border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    },
    '&$withLabel': {
      alignItems: 'initial',
    },
    '&$disabled': {
      backgroundColor: theme.colors.neutralGray.extraLight50,
    }
  }),
  highlighted: {},
  inputContainerError: {
    border: `1px solid ${theme.colors.error.main500}`,
    '&$highlighted': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.colors.error.extraLight50}`,
    },
    '&:focus-within': {
      boxShadow: `0 0 0 ${toRem(4)} ${theme.colors.error.extraLight50}`,
    },
  },
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
    height: toRem(17),
    padding: 0,
    width: '100%',
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    '&::placeholder': {
      color: theme.colors.neutralGray.main500,
    }
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  prefix: {
    fontSize: toRem(14),
    color: theme.colors.text.headline,
    backgroundColor: theme.colors.background.white,
    whiteSpace: 'nowrap',
  },
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.colors.neutralGray.extraLight50,
  },
  label: {
    color: theme.colors.text.secondary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: toRem(17),
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
  }
}), { internalUsage: true });
