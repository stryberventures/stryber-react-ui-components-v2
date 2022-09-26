import { createStyles } from '../Theme';
import { ITextLink } from './index';

export default createStyles((theme) => ({
  textLink: (props: ITextLink) =>  ({
    padding: [8, 16],
    color: theme[props.color!].main,
    fontSize: 16,
    lineHeight: '24px',
    borderRadius: 8,
    cursor: 'pointer',
    fontFamily: theme.font,
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    '-webkit-tap-highlight-color': 'transparent',
    '& svg path': {
      fill: theme[props.color!].main,
    },
    '&:visited svg path': {
      fill: '#8C0A8F',
    },
    '&:visited': {
      color: '#8C0A8F',
    },
    '&:hover': {
      backgroundColor: theme[props.color!].light,
    },
    '&:active': {
      boxShadow: `0 0 0 4px ${theme[props.color!].light}`,
      outlineOffset: -2,
      backgroundColor: 'transparent',
    },
  }),
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
    cursor: 'default',
  },
}));
