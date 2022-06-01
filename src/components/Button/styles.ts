import { IButton } from './index';
import { createStyles } from '../../styles';

export default createStyles((theme) => ({
  button: {
    fontFamily: theme.font,
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:active:not($disabled)': {
      outline: `4px solid ${theme.primary.light}`,
    },
  },
  contained: (props: IButton) => ({
    backgroundColor: theme[props.color!].main,
    color: theme[props.color!].contrast,
    '& $icon path': {
      fill: theme[props.color!].contrast,
    },
    '&:hover': {
      backgroundColor: theme[props.color!].dark,
    }
  }),
  outlined: (props: IButton) => ({
    backgroundColor: theme[props.color!].contrast,
    color: theme[props.color!].main,
    border: [2, 'solid', theme[props.color!].main],
    '& $icon path': {
      fill: theme[props.color!].main,
    },
    '&:hover': {
      backgroundColor: theme[props.color!].light,
    },
  }),
  disabled: {
    opacity: 0.3,
    pointerEvents: 'none',
  },
  mini: {
    gap: 8,
    fontSize: 10,
    lineHeight: '15px',
    padding: '4.5px 8px',
  },
  small: {
    fontSize: 16,
    lineHeight: '24px',
    padding: '8px 16px',
    gap: 10,
  },
  medium: {
    fontSize: 16,
    lineHeight: '24px',
    padding: '16px 24px',
    gap: 10,
  },
  large: {
    fontSize: 16,
    lineHeight: '24px',
    padding: '24px 32px',
    gap: 14,
  },
  flat: {},
  round: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: 50,
  },
  icon: {
    '$mini &': {
      width: 14,
      height: 14,
    },
    '$small &, $medium &, $large &': {
      width: 20,
      height: 20,
    },
  },
}));
