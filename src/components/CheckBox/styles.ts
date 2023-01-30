import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';
import { ICheckBox } from './index';

export default createStyles((theme) => ({
  checkbox: (props: ICheckBox) => ({
    '& input:focus + div>span': {
      boxShadow: `0 0 0 2px white, 0 0 0 4px ${theme.colors[props.color!].light200}`,
    },
  }),
  small: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(26),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 24px)',
    },
  },
  medium: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(30),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 28px)',
    },
  },
  reversed: {},
}), { internalUsage: true });
