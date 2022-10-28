import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';

interface IChipStyle {
  color?: 'primary' | 'secondary' | 'success',
}

export default createStyles((theme) => ({
  chip: {
    display: 'inline-flex',
    fontFamily: theme.font,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: toRem(8),
    fontSize: toRem(14),
    lineHeight: toRem(21),
    fontWeight: 500,
    borderRadius: toRem(8),
    boxSizing: 'border-box',
    '&:not($disabled)': {
      cursor: 'pointer',
    },
  },
  contained: (props: IChipStyle) => ({
    '&:not($default)': {
      padding: [toRem(6), toRem(16)],
      backgroundColor: theme[props.color!].main,
      color: theme[props.color!].contrast,
      '&$iconLeft': {
        paddingLeft: toRem(8),
      },
      '&$iconRight': {
        paddingRight: toRem(8),
      },
      '&$iconOnly': {
        padding: [toRem(7), toRem(8)],
      },
      '&:hover:not($disabled)': {
        backgroundColor: theme[props.color!].dark,
      },
      '& svg path': {
        fill: theme[props.color!].contrast,
      }
    }
  }),
  outlined: (props: IChipStyle) => ({
    '&:not($default)': {
      padding: [toRem(5), toRem(15)],
      color: theme[props.color!].main,
      border: `${toRem(1)} solid ${theme[props.color!].main}`,
      backgroundColor: theme[props.color!].contrast,
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
        backgroundColor: theme.default.extraLight,
      },
      '& svg path': {
        fill: theme[props.color!].main,
      }
    }
  }),
  default: {
    backgroundColor: theme.default.light,
    color: theme.default.dark,
    padding: `${toRem(6)} ${toRem(16)}`,
    '& svg path': {
      fill: theme.default.dark,
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
        color: theme.default.main,
        backgroundColor: theme.default.light,
        '& svg path': {
          fill: theme.default.main,
        },
      },
      '&$outlined': {
        color: theme.default.main,
        border: `${toRem(1)} solid ${theme.default.main}`,
        '& svg path': {
          fill: theme.default.main,
        },
      },
    }
  },
  iconLeft: {},
  iconRight: {},
  iconOnly: {},
}), { internalUsage: true });
