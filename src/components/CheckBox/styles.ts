import { createStyles } from '../Theme';
import { toRem } from '../Theme/utils';
import { ICheckBox } from './index';

export default createStyles((theme) => ({
  checkbox: (props: ICheckBox) => ({
    '& input:enabled:focus-visible + div>span': {
      boxShadow: `0 0 0 2px white, 0 0 0 ${toRem(4)} ${theme.colors[props.color!].light200}`,
    },
  }),
  small: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(26),
    },
    '&$reversed label span:last-child': {
      width: `calc(100% - ${toRem(24)})`,
    },
  },
  medium: {
    '&:not($reversed) label>span:last-child': {
      marginLeft: toRem(30),
    },
    '&$reversed label span:last-child': {
      width: `calc(100% - ${toRem(28)})`,
    },
  },
  reversed: {},
}), { internalUsage: true });
