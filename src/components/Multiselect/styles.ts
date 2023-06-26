import { createStyles, toRem } from '../Theme';

export default () =>
  createStyles(
    () => ({
      dropdown: {
        '& > [class*="inputRoot"] > [class*="inputContainer"]': {
          height: 'initial',
          minHeight: toRem(48),
        },
      },
      content: {
        padding: [toRem(8), 0],
        maxHeight: toRem(304),
        overflow: 'auto',
      },
      checkbox: {
        width: '100%',
        '& [class*="text"]': {
          display: 'block',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        },
        '& [class*="label"]': {
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        },
        '& label': {
          height: toRem(48),
          alignItems: 'center',
          width: '100%',
          padding: [0, toRem(16)],
        },
      },
      listItem: {
        padding: '0 !important',
        '& [class*="listItemContainer"]': {
          width: '100%',
        },
      },
      tagWrapper: {
        display: 'flex',
        gap: toRem(4),
        flexWrap: 'wrap',
      },
      multiselectLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: toRem(8),
      },
    }),
    { internalUsage: true }
  );
