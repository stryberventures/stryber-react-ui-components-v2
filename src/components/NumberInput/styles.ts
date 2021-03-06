import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  numberInputContainer: {
    position: 'relative',
  },
  inputIcon: {
    fontFamily: theme.font,
    fontSize: 14,
    color: theme.text.hint,
    height: 17,
    paddingRight: 5,
    position: 'absolute',
    left: 8,
    bottom: 5,
    zIndex: 2,
  },
  numberInput: {
    '& input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&[type=number]': {
        '-moz-appearance': 'textfield',
      }
    },
  },
  quantityCounter: {
    '& input': {
      paddingRight: 92,
    },
  },
  btnsContainer: {
    position: 'absolute',
    right: 8,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '& $counterBtn': {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  separatorLine: {
    padding: '0 5.5px',
    display: 'flex',
  },
  counterBtn: {
    cursor: 'pointer',
    borderRadius: '50%',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '&:hover': {
      backgroundColor: theme.default.extraLight,
    },
    '&:active': {
      boxShadow: '0px 0px 0px 4px',
      color: theme.primary.light,
    }
  },
}));
