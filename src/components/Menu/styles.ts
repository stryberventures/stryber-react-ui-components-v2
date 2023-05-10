import { createStyles, toRem } from '../Theme';

export default () => createStyles((theme) => ({

  searchInput: {
    width: '100% !important',
    '& [class*="hint"], & [class*="error"]': {
      marginLeft: toRem(12),
    },
    '& > div': {
      height: toRem(48),
      paddingTop: toRem(15),
      paddingBottom: toRem(15),
      border: 'transparent',
      '&:focus-within:not($disabled):not($inputContainerError)': {
        outline: 'none !important',
        border: '0px !important',
        boxShadow: 'none !important'
      },
      '&:hover, &:hover $input': {
        outline: 'none !important',
        border: '0px !important',
        boxShadow: 'none !important',
        background: 'white !important'
      },
    }
  },
  searchIcon: {
    minWidth: toRem(14.75),
    width: toRem(14.75),
    minHeight: toRem(14),
    height: toRem(14.75),
  },
  listContainer: {
  },
  inputContainer: {
    borderBottom: `${toRem(1)} solid ${theme.colors.neutralGray.light200}`,
  },
  small: {
    width: toRem(136)
  },
  medium: {
    width: toRem(200)
  },
  large: {
    width: toRem(343)
  },
  menuContainer: {
    borderRadius: `${toRem(8)} !important`,
    overflow: 'hidden'
  }


}), { internalUsage: true });
