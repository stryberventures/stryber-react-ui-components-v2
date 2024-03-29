import { createStyles, toRem } from '../../Theme';
import { IMenuSearch } from './index';

export default () =>
  createStyles(
    (theme) => ({
      searchInput: {
        width: '100% !important',
        '& [class*="hint"], & [class*="error"]': (props: IMenuSearch) => ({
          [props.dir === 'rtl' ? 'marginRight' : 'marginLeft']: toRem(12),
        }),
        '& > div': {
          height: toRem(48),
          paddingTop: toRem(15),
          paddingBottom: toRem(15),
          border: 'transparent',
          '&:focus-within:not($disabled):not($inputContainerError)': {
            outline: 'none !important',
            border: '0px !important',
            boxShadow: 'none !important',
          },
          '&:hover, &:hover $input': {
            outline: 'none !important',
            border: '0px !important',
            boxShadow: 'none !important',
            background: 'white !important',
          },
        },
      },
      searchIcon: ({ dir }: IMenuSearch) => ({
        [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(8),
      }),
      inputContainer: {
        borderBottom: `${toRem(1)} solid ${theme.colors.neutralGray.light200}`,
      },
    }),
    { internalUsage: true }
  );
