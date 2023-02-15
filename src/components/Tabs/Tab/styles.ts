import { createStyles, toRem } from '../../Theme';

export default createStyles((theme) => {
  return ({
    tab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: toRem(18),
      padding: [toRem(14), toRem(22)],
      borderBottom: `${toRem(3)} solid transparent`,
      cursor: 'pointer',
    },
  })
});
