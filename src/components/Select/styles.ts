import { createStyles, toRem } from '../../components/Theme';


export default createStyles(() => ({
  content: {
    padding: [toRem(8), 0],
    maxHeight: toRem(190),
    overflow: 'auto',
  },
}), { internalUsage: true });
