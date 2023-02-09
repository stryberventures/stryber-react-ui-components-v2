import { createStyles } from '../Theme';
import { toRem } from '../Theme/utils';
import { ICheckBox } from './index';

export default createStyles((theme) => ({
  checkbox: (props: ICheckBox) => ({
    '& input:enabled:focus-visible + div > div': {
      boxShadow: `0 0 0 2px white, 0 0 0 ${toRem(4)} ${theme.colors[props.color!].light200}`,
    },
  }),
  '&:not($reversed) label>span$hint': {
    marginLeft: toRem(30),
  },
  reversed: {
    '& label span:last-child': {
      width: `calc(100% - ${toRem(28)})`,
    }
  },
}), { internalUsage: true });
