import { createStyles, toRem } from '../Theme';
import { IChip } from './index';
type TChipColor = 'primary' | 'secondary' | 'success';

const getThemeColorName = (color: string | undefined) =>
  color === 'default' ? 'primary' : (color as TChipColor);

export default () =>
  createStyles(
    (theme) => ({
      chip: (props: IChip) => ({
        direction: props.dir || 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        gap: toRem(8),
        borderRadius: toRem(8),
        boxSizing: 'border-box',
        '&:not($disabled)': {
          cursor: 'pointer',
        },
      }),
      contained: (props: IChip) => ({
        '&:not($default)': {
          padding: [toRem(6), toRem(16)],
          backgroundColor: theme.colors[getThemeColorName(props.color)].main500,
          color: theme.colors.contrast.white,
          '&$iconLeft': {
            [props.dir === 'rtl' ? 'paddingRight' : 'paddingLeft']: toRem(8),
          },
          '&$iconRight': {
            [props.dir === 'rtl' ? 'paddingLeft' : 'paddingRight']: toRem(8),
          },
          '&$iconOnly': {
            padding: [toRem(7), toRem(8)],
          },
          '&:hover:not($disabled)': {
            backgroundColor:
              theme.colors[getThemeColorName(props.color)].dark600,
          },
          '& svg path': {
            fill: theme.colors.contrast.white,
          },
        },
      }),
      outlined: (props: IChip) => ({
        '&:not($default)': {
          padding: [toRem(5), toRem(15)],
          color: theme.colors[getThemeColorName(props.color)].main500,
          border: `${toRem(1)} solid ${
            theme.colors[getThemeColorName(props.color)].main500
          }`,
          backgroundColor: theme.colors.contrast.white,
          '&$iconLeft': {
            paddingLeft: toRem(7),
          },
          '&$iconRight': {
            paddingRight: toRem(7),
          },
          '&$iconOnly': {
            padding: [toRem(6), toRem(7)],
          },
          '&:hover:not($disabled)': {
            backgroundColor: theme.colors.neutralGray.light100,
          },
          '& svg path': {
            fill: theme.colors[getThemeColorName(props.color)].main500,
          },
        },
      }),
      default: {
        backgroundColor: theme.colors.neutralGray.light200,
        color: theme.colors.neutralGray.main500,
        padding: `${toRem(6)} ${toRem(16)}`,
        '& svg path': {
          fill: theme.colors.neutralGray.dark600,
        },
        '&$iconLeft': {
          paddingLeft: toRem(8),
        },
        '&$iconRight': {
          paddingRight: toRem(8),
        },
        '&$iconOnly': {
          padding: `${toRem(7)} ${toRem(8)}`,
        },
      },
      disabled: {
        '&:not($default)': {
          '&$contained': {
            color: theme.colors.neutralGray.medium300,
            backgroundColor: theme.colors.neutralGray.light200,
            '& svg path': {
              fill: theme.colors.neutralGray.medium300,
            },
          },
          '&$outlined': {
            color: theme.colors.neutralGray.medium300,
            border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
            '& svg path': {
              fill: theme.colors.neutralGray.medium300,
            },
          },
        },
      },
      chipText: {
        whiteSpace: 'nowrap',
      },
      iconLeft: {},
      iconRight: {},
      iconOnly: {},
    }),
    { internalUsage: true }
  );
