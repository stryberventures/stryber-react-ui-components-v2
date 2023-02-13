import { createStyles } from '../Theme';
import { toRem } from '../Theme/utils';
import { IRadioButton } from './index';

export default createStyles((theme) => ({
  radiobutton: (color: IRadioButton['color']) => ({
    '& input:enabled:focus-visible + div > div': {
      boxShadow: `0 0 0 2px white, 0 0 0 ${toRem(4)} ${theme.colors[color!].light200}`,
    },
  }),
}), { internalUsage: true });
