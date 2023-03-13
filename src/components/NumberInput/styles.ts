import { createStyles, toRem } from '../Theme'


export default createStyles((theme) => ({
  numberInputContainer: {
    position: 'relative',
  },
  inputIcon: {
    fontFamily: theme.font,
    fontSize: toRem(14),
    color: theme.colors.text.tint,
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
  right: {
    display: 'flex',
    gap: toRem(8),
    alignItems: 'center',
    height: '100%',
    paddingLeft: toRem(8),
  },
  btnsContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  prefix: {
    marginRight: toRem(10),
  },
  separatorLine: {
    width: toRem(1),
    height: toRem(20),
    margin: `0 ${toRem(12)}`,
    backgroundColor: theme.colors.neutralGray.medium300,
  },
  counterBtn: {
    cursor: 'pointer',
    borderRadius: '50%',
    userSelect: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    width: toRem(24),
    height: toRem(24),
    padding: '0 !important',
  },
}), { internalUsage: true });
