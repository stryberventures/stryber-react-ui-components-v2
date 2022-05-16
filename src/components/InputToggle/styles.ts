import { createStyles } from '../../styles';

export default createStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  disabled: {
    pointerEvents: 'none',
  },
  input: () => ( {
    display: 'none',
  }),
  label: {
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  labelText: {
    marginLeft: 8,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));
