import { createStyles, toRem } from '../Theme';
import { IMultiselect } from './index';

export default () =>
  createStyles(
    () => ({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dropdown: (props: IMultiselect) => ({
        '& > [class*="inputRoot"] > [class*="inputContainer"]': {
          height: 'initial',
          minHeight: toRem(props.inputVariant === 'floatingLabel' ? 64 : 48),
        },
        '& > [class*="inputRoot"] > [class*="inputContainer"] > [class*="inputArea"]':
          {
            margin: `${
              props.inputVariant === 'floatingLabel' ? toRem(-1) : 0
            } 0`,
          },
        '& > [class*="inputRoot"] > [class*="inputContainer"] > [class*="inputArea"] > [class*="floatingLabelInputWrapperInUse"]':
          {
            height: 'initial',
            boxSizing: 'border-box',
            minHeight: toRem(32),
            alignItems: 'flex-end',
          },
      }),
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
