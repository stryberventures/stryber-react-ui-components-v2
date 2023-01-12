import { createStyles } from '../Theme';
import { ITextLink } from './index';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
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
      '&:hover, &:hover:not(:visited)': {
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
      bottom: props.size == 'small' ? 2 : (props.size == 'medium') ? 3 : 4,
      width: '100%',
      borderBottom: '1.5px solid transparent',
      transition: 'border-bottom .2s ease-out',
      content: '""',
    },
  }),
  disabled: (props: ITextLink) => ({
    pointerEvents: 'none',
    cursor: 'default',
    '& $text': {
      color: theme.colors[props.color!].light200,
    },
    '& $text:after': {
      borderColor: theme.colors[props.color!].light200,
    },
    '& svg path': {
      fill: theme.colors[props.color!].light200,
    },
  }),
}), { internalUsage: true });
