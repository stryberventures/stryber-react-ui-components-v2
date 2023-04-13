import { createStyles, toRem } from '../Theme';
import { ISearchInput } from './index';


export default () => createStyles((theme) => ({
  searchInput: {
    '& [class*="hint"], & [class*="error"]': {
      marginLeft: toRem(12),
    },
  },
  searchIcon: ({ disabled }: ISearchInput) => ({
    minWidth: toRem(22),
    width: toRem(22),
    minHeight: toRem(22),
    height: toRem(22),
    '& path': {
      fill: disabled ? `${theme.colors.text.disabled} !important` : theme.colors.text.secondary,
    }
  }),
  large: {
    '& > div': {
      height: toRem(56),
      paddingTop: toRem(15),
      paddingBottom: toRem(15),
    },
  },
}));
