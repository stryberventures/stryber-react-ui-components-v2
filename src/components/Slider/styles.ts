import { createStyles } from '../Theme';
import { ISlider } from './index';

export default createStyles( (theme) => ({
  container: {
    fontFamily: theme.font,
    fontWeight: 600,
    fontSize: 12,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    position: 'relative',
  },
  thumb: (props: ISlider) =>  ({
    backgroundColor: theme[props.color!].main,
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 0 1px 1px #ced4da',
    cursor: 'pointer',
    height: 30,
    width: 30,
    position: 'absolute',
    top: -12,
    zIndex: 5,
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: `0 0 5px 3px ${theme[props.color!].light}`,
      zIndex: 6
    }
  }),
  thumbLabel: {
    position: 'relative',
    bottom: 34,
    width: 'fit-content',
    color: theme.primary.contrast,
    fontSize: 12,
    height: 16,
    padding: '2px 4px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
    display: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '&$show': {
      display: 'block',
    }
  },
  thumbInput: {
    position: 'relative',
    bottom: 38,
    zIndex: 5,
    margin: '0 auto',
    fontSize: 14,
    fontWeight: 600,
    color: theme.text.hint,
    width: 'fit-content',
    display: 'none',
    '-moz-user-select': 'none',
    '-webkit-user-select': 'none',
    '-ms-user-select': 'none',
    '&>div': {
      width: 'fit-content',
    },
    '&>div>div': {
      height: 32,
      padding: 0,
      width: 'fit-content',
    },
    '& $input': {
      minWidth: 13,
      textAlign: 'center',
      padding: '8px 5.5px',
      lineHeight: 16,
      height: '-webkit-fill-available',
      border: 'none',
      '-moz-user-select': 'none',
      '-webkit-user-select': 'none',
      '-ms-user-select': 'none',
    },
    '&$show': {
      display: 'block',
    }
  },
  slider: {
    position: 'relative',
    width: '100%',
    height: 6,
  },
  sliderTrack: {
    position: 'absolute',
    borderRadius: 3,
    height: 6,
    backgroundColor: theme.default.main,
    width: '100%',
    zIndex: 1,
  },
  sliderRange: (props: ISlider) => ({
    position: 'absolute',
    borderRadius: 3,
    height: 6,
    backgroundColor: theme[props.color!].main,
    opacity: 0.6,
    zIndex: 2,
  }),
  sideLabel: {
    color: theme.primary.contrast,
    fontSize: 12,
    padding: '2px 4px',
    margin: '0 8px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
  },
  show: {
    '&$error>div>div:not(inputContainerError)': {
      borderColor: theme.error.main,
    },
    '&$error>div>div:focus-within:not(inputContainerError)': {
      borderColor: theme.error.main,
    },
  },
  error: {
    '&>div>div:not(inputContainerError)': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.error.main,
    }
  },
  dotsContainer: {
    position: 'absolute',
    width: '100%',
    height: '7px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.default.light,
  },
}))
