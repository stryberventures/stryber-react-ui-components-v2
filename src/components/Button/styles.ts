import { ITheme } from '../ThemeProvider/types';
import { IButton } from './index';
import { createStyles } from '../../styles';

export default createStyles((theme: ITheme) => ({
  button: {
    fontFamily: theme.font,
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
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
    fontSize: 10,
    lineHeight: '15px',
    height: 24,
  },
  small: {
    fontSize: 16,
    lineHeight: '24px',
    padding: [0, 16],
    height: 40,
  },
  medium: {
    fontSize: 16,
    lineHeight: '24px',
    padding: [0, 24],
    height: 56,
  },
  large: {
    fontSize: 16,
    lineHeight: '24px',
    padding: [0, 32],
    height: 72,
  },
  flat: {},
  round: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: 50,
  },
  withIcon: {
    display: 'flex',
    alignItems: 'center',
    '&$mini': {
      gap: 8,
    },
    '&$small, &$medium': {
      gap: 10,
    },
    '&$large': {
      gap: 14,
    }
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
  iconAlignRight: {
    flexDirection: 'row-reverse',
  },
}));
