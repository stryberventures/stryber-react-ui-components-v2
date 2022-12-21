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
      color: theme.colors[props.color!].main500,
      textDecoration: 'none',
      '-webkit-tap-highlight-color': 'transparent',
      '& svg path': {
        fill: theme.colors[props.color!].main500,
      },
      '&:visited svg path': {
        fill: theme.colors[props.color!].dark600,
      },
      '&:visited': {
        color: theme.colors[props.color!].dark600,
      },
      '&:hover': {
        color: theme.colors[props.color!].dark600,
      },
      '&:active': {
        color: theme.colors[props.color!].dark600,
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
        borderBottom: `2px solid ${theme.colors[props.color!].main500}`,
      },
    },
  }),
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
    cursor: 'default',
  },
}), { internalUsage: true });
