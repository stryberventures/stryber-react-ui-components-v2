import { createStyles, toRem } from '../Theme';
import { ICombobox } from './index';

export default () => createStyles(() => ({
  content: (props: ICombobox) => ({
    direction: props.dir || 'inherit',
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  }),
  clearIcon: {
    zIndex: 99,
  }
}), { internalUsage: true });
