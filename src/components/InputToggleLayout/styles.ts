import { createStyles, toRem } from '../Theme';
import { IInputToggle } from './types';

export default () =>
  createStyles(
    (theme) => ({
      inputToggleLayout: (props: IInputToggle) => ({
        direction: props.dir || 'inherit',
        boxSizing: 'border-box',
        '& *, *:before, *:after': {
          boxSizing: 'inherit',
        },
      }),
      disabled: {
        pointerEvents: 'none',
        '& $heading': {
          color: theme.colors.text.disabled,
        },
        '& $hint': {
          color: theme.colors.text.disabled,
        },
      },
      title: () => ({
        color: theme.colors.text.headline,
        lineHeight: '120%',
        margin: [0, theme.spacing[8], theme.spacing[8], theme.spacing[4]],
      }),
      titleReverse: {
        textAlign: 'right',
      },
      labelContainer: (props: IInputToggle) => ({
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: `${toRem(8)} ${toRem(10)}`,
        position: 'relative',
        userSelect: 'none',
        width: 'fit-content',
        padding: [
          theme.spacing[4],
          theme.spacing[props.dir === 'rtl' ? 4 : 8],
          theme.spacing[4],
          theme.spacing[props.dir === 'rtl' ? 8 : 4],
        ],
        '-webkit-tap-highlight-color': 'transparent',
        '&:hover': {
          cursor: 'pointer',
        },
        '&:has(input:focus-visible) input + div > div': {
          boxShadow: `0 0 0 2px white, 0 0 0 ${toRem(4)} ${
            theme.colors[props.color!].light200
          }`,
        },
        '&$fullWidth': {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        },
      }),
      reverse: {
        gridTemplateColumns: '1fr auto !important',
        '& $inputContainer': {
          gridColumn: '2 / 3',
        },
        '& $label, & $hint': {
          gridColumn: 'span 1',
        },
      },
      inputContainer: {
        gridColumn: '1',
        gridRow: '1 / 2',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: toRem(1),
      },
      middleAlign: {
        alignItems: 'center',
      },
      input: () => ({
        position: 'absolute',
        width: 0,
        height: 0,
      }),
      label: (props: IInputToggle) => ({
        textAlign: props.dir === 'rtl' ? 'right' : 'left',
        display: 'flex',
        alignItems: 'center',
        color: theme.colors.text.headline,
        lineHeight: '150%',
        gridColumn: '2 / 3',
      }),
      hint: {
        display: 'flex',
        alignItems: 'center',
        color: theme.colors.text.secondary,
        lineHeight: '120%',
        gridColumn: '2 / 3',
      },
      firstRow: {
        gridRow: '1 / 2',
      },
      secondRow: {
        gridRow: '2 / 3',
      },
      error: (props: IInputToggle) => ({
        [props.dir === 'rtl' ? 'marginRight' : 'marginLeft']:
          theme.spacing['4'],
      }),
      fullWidth: {},
      medium: {},
      small: {},
      textDisabled: {
        color: theme.colors.text.disabled,
      },
    }),
    { internalUsage: true }
  );
