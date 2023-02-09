import { createStyles, toRem } from '../Theme';
import { ISwitch } from './index';

export default createStyles((theme) => ({
  switch: (color: ISwitch['color']) => ({
    '& input:focus-visible + div > div': {
      boxShadow: `0 0 0 ${toRem(2)} white, 0 0 0 ${toRem(4)} ${theme.colors[color!].light200}`,
    },
  }),
  small: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(39),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 37px)',
    },
  },
  medium: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(54),
    },
    '&$reversed label span:last-child': {
      width: 'calc(100% - 52px)',
    },
  },
  reversed: {},
}), { internalUsage: true });
