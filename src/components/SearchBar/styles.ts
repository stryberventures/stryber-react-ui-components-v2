import { createStyles, toRem } from '../Theme';


export default () => createStyles((theme) => ({
  searchIcon: {
    minWidth: toRem(22),
    width: toRem(22),
    minHeight: toRem(22),
    height: toRem(22),
  },
}));
