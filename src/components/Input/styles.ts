import { createStyles, toRem } from '../Theme';
import { IInput } from './index';

const getDimension = (d: string | number) => {
  const chunks = d.toString().split('%');
  return chunks.length > 1 ? d : toRem(Number.parseInt(chunks[0]));
}

export default () => createStyles((theme) => ({
  inputRoot: (props: IInput) => ({
    width: getDimension(props.width || 320),
  }),
  inputContainer: (props: IInput) => ({
    boxSizing: 'border-box',
    borderRadius: toRem(4),
    position: 'relative',
    fontFamily: theme.font,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: [toRem(4), toRem(14)],
    height: toRem(props.variant === 'mobile' ? 56 : 48),
    border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    backgroundColor: theme.colors.background.white,
    '&:hover, &:hover $input': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
    '&:hover:not($disabled):not($inputContainerError)': {
      border: `${toRem(1)} solid ${theme.colors.primary.medium400}`,
    },
    '&:focus-within': {
      paddingLeft: toRem(13),
      paddingRight: toRem(13),
      backgroundColor: theme.colors.background.white,
    },
    '&:focus-within $input': {
      backgroundColor: theme.colors.background.white,
    },
    '&:focus-within:not($disabled):not($inputContainerError)': {
      border: `${toRem(2)} solid ${theme.colors[props.color!].main500}`,
    },
    '&$disabled': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
  }),
  disabled: {
    pointerEvents: 'none',
    userSelect: 'none',
  },
  inputContainerError: () => ({
    border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    '&:focus-within': {
      border: `${toRem(2)} solid ${theme.colors.error.main500}`,
    },
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
    transition: 'font-size 0.2s',
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
    transition: 'height 0.2s, padding 0.2s, opacity 0.3s',
    overflow: 'hidden',
    opacity: 0,
  },
  mobileInputWrapperInUse: {
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
  }
}), { internalUsage: true });
