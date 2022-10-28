import { createStyles } from '../Theme';
import toRem from '../../utils/toRem'


export default createStyles((theme) => ({
  numberInputContainer: {
    position: 'relative',
  },
  inputIcon: {
    fontFamily: theme.font,
    fontSize: toRem(14),
    color: theme.text.hint,
    height: toRem(17),
    paddingRight: toRem(5),
    position: 'absolute',
    left: toRem(8),
    bottom: toRem(5),
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
      paddingRight: toRem(92),
    },
  },
  btnsContainer: {
    position: 'absolute',
    right: toRem(8),
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '& $counterBtn': {
      width: toRem(28),
      height: toRem(28),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  separatorLine: {
    padding: `0 ${toRem(5.5)}`,
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
      boxShadow: `0px 0px 0px ${toRem(4)}`,
      color: theme.primary.light,
    }
  },
}), { internalUsage: true });
