import { createUseStyles } from 'react-jss';
import { ITheme } from '../ThemeProvider/types';
import { defaultTheme } from '../../constants/defaultTheme';

export default createUseStyles((theme: ITheme) => ({
  button: {
    fontFamily: theme.font || defaultTheme.font,
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
    '&:active:not($disabled)': {
      outline: `4px solid ${theme.highlight || defaultTheme.highlight}`,
    },
  },
  primary: {
    backgroundColor: theme?.primary?.main || defaultTheme.primary.main,
    color: theme?.primary?.contrast || defaultTheme.primary.contrast,
    '& $icon path': {
      fill: theme?.primary?.contrast || defaultTheme.primary.contrast,
    },
    '&:hover': {
      backgroundColor: theme?.primary?.dark || defaultTheme.primary.dark,
    }
  },
  secondary: {
    backgroundColor: theme?.secondary?.main || defaultTheme.secondary.main,
    color: theme?.secondary?.contrast || defaultTheme.secondary.contrast,
    '& $icon path': {
      fill: theme?.secondary?.contrast || defaultTheme.secondary.contrast,
    },
    '&:hover': {
      backgroundColor: theme?.secondary?.dark || defaultTheme.secondary.dark,
    }
  },
  tertiary: {
    backgroundColor: theme?.primary?.contrast || defaultTheme.primary.contrast,
    color: theme?.primary?.main || defaultTheme.primary.main,
    border: [2, 'solid', theme?.primary?.main || defaultTheme.primary.main],
    '& $icon path': {
      fill: theme?.primary?.main || defaultTheme.primary.main,
    },
    '&:hover': {
      backgroundColor: theme?.primary?.light || defaultTheme.primary.light,
      borderColor: theme?.primary?.light || defaultTheme.primary.light,
    },
    '&:active': {
      backgroundColor: theme?.primary?.contrast || defaultTheme.primary.contrast,
      borderColor: theme?.primary?.main || defaultTheme.primary.main,
    }
  },
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
