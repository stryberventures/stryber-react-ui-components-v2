import { createStyles, toRem } from '../../components/Theme'


export default createStyles(() => ({
  inputPassword: {
    width: toRem(320),
  },
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
