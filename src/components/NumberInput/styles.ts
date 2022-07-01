import { createStyles } from '../../styles';
import { INumberInput } from './index';

export default createStyles((theme) => ({
  numberInputContainer: (props: INumberInput) => ({
    position: 'relative',
  }),
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
  input: {
    width: '100%',
    '& input': {
      paddingLeft: 5,
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
    '& $input': {
      width: '100%',
      '& input': {
        paddingLeft: 0,
        paddingRight: 92,
        /*'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          '-webkit-appearance': 'auto',
          margin: 'initial',
        },
        '&[type=number]': {
          '-moz-appearance': 'auto',
        }*/
      },
    },
  },
  counterBtns: {
    position: 'absolute',
    right: 8,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '&>div': {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
  increase: {
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: theme.default.extraLight,
    '&:hover': {
      boxShadow: '0px 0px 0px 4px',
      color: theme.primary.light,
    }
  },
  decrease: {
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: theme.default.extraLight,
    '&:hover': {
      boxShadow: '0px 0px 0px 4px',
      color: theme.primary.light,
    }
  }

}));
