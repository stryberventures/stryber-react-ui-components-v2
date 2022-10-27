import { createStyles } from '../Theme';
import { ITextLink } from './index';
import toRem from '../../utils/toRem';


export default createStyles((theme) => {
  console.log('theme ==> ', theme);
  return ({
    textLink: (props: ITextLink) => {
      console.log('props.color ==> ', props.color);
      return ({
        display: 'inline-flex',
        alignItems: 'center',
        gap: toRem(8),
        padding: [toRem(8), toRem(16)],
        borderRadius: toRem(8),
        cursor: 'pointer',
        color: theme[props.color!].main,
        textDecoration: 'none',
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
          boxShadow: `0 0 0 ${toRem(4)} ${theme[props.color!].light}`,
          outlineOffset: toRem(-2),
          backgroundColor: 'transparent',
        },
      })
    },
    disabled: {
      opacity: 0.4,
      pointerEvents: 'none',
      cursor: 'default',
    },
  })
});
