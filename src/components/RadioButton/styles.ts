import { createStyles } from '../Theme';
import { toRem } from '../Theme/utils';
import { TRadioButtonColor } from './RadioBoxMark';

export default createStyles((theme) => ({
  radiobutton: (color: TRadioButtonColor) => ({
    '& input:enabled:focus-visible + div > div': {
      boxShadow: `0 0 0 2px white, 0 0 0 ${toRem(4)} ${theme.colors[color].light200}`,
    },
  }),
}), { internalUsage: true });
