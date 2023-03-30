import { createStyles, toRem } from '../Theme';
import { ISearchBar } from './index';


export default () => createStyles((theme) => ({
  searchInput: {
    '& [class*="hint"], & [class*="error"], ': {
      marginLeft: toRem(12),
    },
  },
  searchIcon: ({ disabled }: ISearchBar) => ({
    minWidth: toRem(22),
    width: toRem(22),
    minHeight: toRem(22),
    height: toRem(22),
    '& path': {
      fill: disabled ? `${theme.colors.text.disabled} !important` : theme.colors.text.secondary,
    }
  }),
}));
