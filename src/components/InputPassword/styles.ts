import { createStyles, toRem } from '../Theme';
import { IInput } from '../Input';
import { getDimension } from '../Input/utils';

export default () => createStyles(() => ({
  inputPassword: (props: IInput) => ({
    width: getDimension(props.width || 320),
  }),
  inputLayout: {
    width: '100%',
  },
  chips: {
    marginTop: toRem(16),
    display: 'flex',
    flexWrap: 'wrap',
    gap: toRem(8),
  },
  chipMatched: {
    width: toRem(18),
  },
  fullWidth: {
    width: '100%',
  }
}));
