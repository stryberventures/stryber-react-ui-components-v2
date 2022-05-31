import { createStyles } from '../../styles';
import { IChip } from './index';

export default createStyles((theme) => ({
  chip: {
    display: 'inline-flex',
    fontFamily: theme.font,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: 8,
    fontSize: 14,
    fontWeight: 500,
    height: 32,
    borderRadius: 8,
    padding: '0 16px',
    boxSizing: 'border-box',
    '&:not($disabled)': {
      cursor: 'pointer',
    },
  },
  contained: (props: IChip) => ({
    backgroundColor: theme[props.color!].main,
    color: theme[props.color!].contrast,
    '&:hover:not($disabled)': {
      backgroundColor: theme[props.color!].dark,
    },
    '& svg path': {
      fill: theme[props.color!].contrast,
    }
  }),
  outlined: (props: IChip) => ({
    color: theme[props.color!].main,
    border: `1px solid ${theme[props.color!].main}`,
    backgroundColor: theme[props.color!].contrast,
    '&:hover:not($disabled)': {
      backgroundColor: theme.default.extraLight,
    },
    '& svg path': {
      fill: theme[props.color!].main,
    }
  }),
  disabled: {
    color: theme.default.dark,
    '& svg path': {
      fill: theme.default.dark,
    },
    '&$contained': {
      backgroundColor: theme.default.light,
    },
    '&$outlined': {
      border: `1px solid ${theme.default.main}`,
    },
  },
  iconLeft: {
    paddingLeft: 8,
  },
  iconRight: {
    paddingRight: 8,
  },
}));
