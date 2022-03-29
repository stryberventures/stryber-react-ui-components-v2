import { createUseStyles } from 'react-jss';

interface IStyledProps {
  colorPrimary: string,
  colorSecondary: string,
}

export default createUseStyles({
  button: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
    border: 'none',
  },
  primary: ({colorPrimary, colorSecondary}: IStyledProps) => ({
    backgroundColor: colorPrimary,
    color: colorSecondary,
    position: 'relative',
    overflow: 'hidden',
    '&:hover:not($disabled)::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      opacity: 0.05,
      left: 0,
      top: 0,
    },
  }),
  secondary: ({colorPrimary, colorSecondary}: IStyledProps) => ({
    backgroundColor: colorSecondary,
    color: colorPrimary,
    border: [2, 'solid', colorPrimary],
  }),
  disabled: {
    opacity: 0.3,
    pointerEvents: 'none',
  },
  mini: {
    fontSize: 10,
    lineHeight: '15px',
    height: 24,
    padding: [0, 8],
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
  iconAlignRight: {
    flexDirection: 'row-reverse',
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
});
