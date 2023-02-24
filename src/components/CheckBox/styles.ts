import { createStyles } from '../Theme';
import { toRem } from '../Theme/utils';

export default createStyles((theme) => ({
  '&:not($reversed) label>span$hint': {
    marginLeft: toRem(30),
  },
  reversed: {
    '& label span:last-child': {
      width: `calc(100% - ${toRem(28)})`,
    }
  },
}), { internalUsage: true });
