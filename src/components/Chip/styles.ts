import { createStyles } from '../../styles';

interface IChipStyle {
  color?: 'primary' | 'secondary' | 'success',
}

export default createStyles((theme) => ({
  chip: {
    display: 'inline-flex',
    fontFamily: theme.font,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: 8,
    fontSize: 14,
    lineHeight: '21px',
    fontWeight: 500,
    borderRadius: 8,
    boxSizing: 'border-box',
    '&:not($disabled)': {
      cursor: 'pointer',
    },
  },
  contained: (props: IChipStyle) => ({
    '&:not($default)': {
      padding: '6px 16px',
      backgroundColor: theme[props.color!].main,
      color: theme[props.color!].contrast,
      '&$iconLeft': {
        paddingLeft: 8,
      },
      '&$iconRight': {
        paddingRight: 8,
      },
      '&$iconOnly': {
        padding: '7px 8px',
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
      padding: '5px 15px',
      color: theme[props.color!].main,
      border: `1px solid ${theme[props.color!].main}`,
      backgroundColor: theme[props.color!].contrast,
      '&$iconLeft': {
        paddingLeft: 7,
      },
      '&$iconRight': {
        paddingRight: 7,
      },
      '&$iconOnly': {
        padding: '6px 7px',
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
    padding: '6px 16px',
    '& svg path': {
      fill: theme.default.dark,
    },
    '&$iconLeft': {
      paddingLeft: 8,
    },
    '&$iconRight': {
      paddingRight: 8,
    },
    '&$iconOnly': {
      padding: '7px 8px',
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
        border: `1px solid ${theme.default.main}`,
        '& svg path': {
          fill: theme.default.main,
        },
      },
    }
  },
  iconLeft: {},
  iconRight: {},
  iconOnly: {},
}));
