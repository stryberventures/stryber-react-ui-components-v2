import { createStyles } from '../Theme';
import { ITextLink } from './index';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
  textLink: (props: ITextLink) => {
    return ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: toRem(8),
      cursor: 'pointer',
      color: theme[props.color!].main,
      textDecoration: 'none',
      '-webkit-tap-highlight-color': 'transparent',
      '& svg path': {
        fill: theme[props.color!].main, // TODO use colors from new theme structure
      },
      '&:visited svg path': {
        fill: theme[props.color!].dark, // TODO use colors from new theme structure
      },
      '&:visited': {
        color: theme[props.color!].dark, // TODO use colors from new theme structure
      },
      '&:active': {
        color: theme[props.color!].dark, // TODO use colors from new theme structure
      },
    })
  },
  text: (props: ITextLink) => ({
    position: 'relative',
    '&:after': {
      position: 'absolute',
      left: 0,
      bottom: 4,
      width: '100%',
      borderBottom: '2px solid transparent',
      transition: 'border-bottom .3s ease-out',
      content: '""',
    },
    '&:hover': {
      '&:after': {
        borderBottom: `2px solid ${theme[props.color!].main}`, // TODO use colors from new theme structure
      },
    },
  }),
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
    cursor: 'default',
  },
}), { internalUsage: true });
