import { IButton } from './index';
import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  button: (props: IButton) => ({
    fontFamily: theme.font,
    fontWeight: 700,
    userSelect: 'none',
    outline: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active:not($disabled)': {
      boxShadow: `0 0 0 4px ${theme[props.color!].light}`,
    },
  }),
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
    '&$mini': {
      padding: '2.5px 8px',
    },
    '&$small': {
      padding: '6px 16px',
    },
    '&$medium': {
      padding: '14px 24px',
    },
    '&$large': {
      padding: '22px 32px',
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
  fullWidth: {
    width: '100%',
  }
}));
