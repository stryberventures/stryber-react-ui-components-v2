import { createStyles, toRem } from '../Theme';
import { ISwitch } from './index';

export default createStyles((theme) => ({
  switch: (props: ISwitch) => ({
    '& input:focus + div': {
      '&>div:first-child': {
        boxShadow: `0 0 0 2px white, 0 0 0 4px ${theme.colors[props.color!].light200}`,
      }
    },
  }),
  small: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(37),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 37px)',
    },
  },
  medium: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(52),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 52px)',
    },
  },
  reversed: {},
}), { internalUsage: true });
