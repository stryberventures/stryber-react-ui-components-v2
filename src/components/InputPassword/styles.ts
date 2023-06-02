import { createStyles, toRem } from '../Theme';
import { IInputPassword } from './index';

export default () => createStyles(() => ({
  inputPassword: (props: IInputPassword) => ({
    direction: props.dir || 'inherit',
    width: toRem(320),
  }),
  inputLayout: () => ({
    width: '100%',
  }),
  chips: {
    marginTop: toRem(16),
    display: 'flex',
    flexWrap: 'wrap',
    gap: toRem(8),
  },
  chipMatched: {
    width: toRem(18),
  },
  fullWidth: () => ({
    width: '100%',
  }),
  eyeIcon: (props: IInputPassword) => ({
    [props.dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(8),
  }),
}), { internalUsage: true });
