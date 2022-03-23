import { createUseStyles } from 'react-jss';

interface IStyledProps {
  colorPrimary: string,
  colorSecondary: string,
}

export default createUseStyles({
  button: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 400,
    userSelect: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  primary: ({colorPrimary, colorSecondary}: IStyledProps) => ({
    backgroundColor: colorPrimary,
    color: colorSecondary,
    position: 'relative',
    overflow: 'hidden',
    border: [1, 'solid', colorPrimary],
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
    '&$disabled': {
      backgroundColor: '#ccc',
      border: [1, 'solid', '#ccc'],
      color: 'rgba(255, 255, 255, 0.5)',
      '& svg path': {
        fill: 'rgba(255, 255, 255, 0.5)',
      }
    },
  }),
  secondary: ({colorPrimary, colorSecondary}: IStyledProps) => ({
    backgroundColor: colorSecondary,
    color: colorPrimary,
    border: [1, 'solid', colorPrimary],
    '&:hover': {
      backgroundColor: colorPrimary,
      color: colorSecondary,
    },
    '&$disabled': {
      backgroundColor: '#f9f9f9',
      color: 'rgba(204, 204, 204, 0.5)',
      borderColor: '#ccc',
      '& svg path': {
        fill: 'rgba(204, 204, 204, 0.5)',
      }
    },
  }),
  disabled: {
    cursor: 'auto',
  },
  mini: {
    fontSize: 10,
    height: 24,
    padding: [0, 12],
    textTransform: 'uppercase',
  },
  small: {
    fontSize: 14,
    padding: [0, 24],
    height: 44,
  },
  medium: {
    fontSize: 16,
    padding: [0, 32],
    height: 56,
  },
  large: {
    fontSize: 16,
    padding: [0, 44],
    height: 70,
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
    gap: 4,
  },
  icon: {
    '$mini &': {
      width: 10,
      height: 10,
    },
    '$small &': {
      width: 14,
      height: 14,
    }
  }
});
