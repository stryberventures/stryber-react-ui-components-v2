import { ITextLink } from './index';
import { createStyles, toRem } from '../Theme';


export default () => createStyles((theme) => ({
  textLink: (props: ITextLink) => {
    return ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: toRem(7),
      cursor: 'pointer',
      textDecoration: 'none',
      '-webkit-tap-highlight-color': 'transparent',
      '& svg path': {
        fill: theme.colors[props.color!].main500,
      },
      '&:hover, &:hover:not(:visited), &:focus': {
        outline: 'none',
        '& $text': {
          color: theme.colors[props.color!].medium400,
        },
        '& $text:after': {
          borderColor: theme.colors[props.color!].medium400,
        },
        '& svg path': {
          fill: theme.colors[props.color!].medium400,
        },
      },
      '&:active, &:visited:active': {
        '& $text': {
          color: `${theme.colors[props.color!].medium300} !important`,
        },
        '& $text:after': {
          borderColor: `${theme.colors[props.color!].medium300} !important`,
        },
        '& svg path': {
          fill: `${theme.colors[props.color!].medium300} !important`,
        },
      },
      '&:visited:not($disabled), &:visited:hover:not($disabled)': {
        '& $text': {
          color: theme.colors[props.color!].dark600,
        },
        '& $text:after': {
          borderColor: theme.colors[props.color!].dark600,
        },
        '& svg path': {
          fill: theme.colors[props.color!].dark600,
        },
      },
    })
  },
  text: (props: ITextLink) => ({
    position: 'relative',
    color: theme.colors[props.color!].main500,
    transition: 'color .3s ease-out',
    '&:after': {
      position: 'absolute',
      left: 0,
      bottom: props.variant == 'body3' ? 2 : (props.variant == 'body2') ? 3 : 4,
      width: '100%',
      borderBottom: '1.5px solid transparent',
      transition: 'border-bottom .2s ease-out',
      content: '""',
    },
  }),
  disabled: (props: ITextLink) => ({
    pointerEvents: 'none',
    cursor: 'default',
    outline: 'none',
    '& $text': {
      color: `${theme.colors[props.color!].light200} !important`,
    },
    '& $text:after': {
      borderColor: `${theme.colors[props.color!].light200} !important`,
    },
    '& svg path': {
      fill: `${theme.colors[props.color!].light200} !important`,
    },
  }),
}), { internalUsage: true });
