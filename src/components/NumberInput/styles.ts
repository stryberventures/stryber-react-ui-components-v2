import { createStyles, toRem } from '../Theme';
import { INumberInput } from './index';


export default () => createStyles((theme) => ({
  numberInputContainer: {
    position: 'relative',
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
  right: (props: INumberInput) => ({
    display: 'flex',
    gap: toRem(8),
    alignItems: 'center',
    height: '100%',
    [props.dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(8),
  }),
  btnsContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  prefix: (props: INumberInput) => ({
    [props.dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(10),
  }),
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
