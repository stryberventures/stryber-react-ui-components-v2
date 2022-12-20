import { createStyles } from '../Theme';
import { ITextLink } from './index';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
  textLink: (props: ITextLink) => {
    return ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: toRem(8),
      padding: [toRem(8), toRem(16)],
      borderRadius: toRem(8),
      cursor: 'pointer',
      color: theme.colors[props.color!].main500,
      textDecoration: 'none',
      '-webkit-tap-highlight-color': 'transparent',
      '& svg path': {
        fill: theme.colors[props.color!].main500,
      },
      '&:visited svg path': {
        fill: '#8C0A8F',
      },
      '&:visited': {
        color: '#8C0A8F',
      },
      '&:hover': {
        backgroundColor: theme.colors[props.color!].extraLight50,
      },
      '&:active': {
        boxShadow: `0 0 0 ${toRem(4)} ${theme.colors[props.color!].extraLight50}`,
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
}), { internalUsage: true });
