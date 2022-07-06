import { createStyles } from '../../styles';
import { IStyles } from './index';

export default createStyles( (theme) => ({
  container: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    position: 'relative',
    '& $thumb': {
      width: '100%',
      '&>div:not($inputContainerError)': {
        border: 'none',
        height: 'auto',
        padding: 0,
      },
      '&>div:focus-within:not($inputContainerError)': {
        border: 'none',
        outline: 'none',
      },
      '& input': {
        '-webkit-appearance': 'none',
        '-webkit-tap-highlight-color': 'transparent',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 5,
        height: 0,
        width: '100%',
        outline: 'none',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        '&::-webkit-slider-thumb': {
          '-webkit-appearance': 'none',
          '-webkit-tap-highlight-color': 'transparent',
          backgroundColor: theme.primary.main,
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 0 1px 1px #ced4da',
          cursor: 'pointer',
          height: 30,
          width: 30,
          marginTop: 4,
          pointerEvents: 'all',
          position: 'relative',
        },
        '&::-moz-range-thumb': {
          backgroundColor: theme.primary.main,
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 0 1px 1px #ced4da',
          cursor: 'pointer',
          height: 30,
          width: 30,
          marginTop: 4,
          pointerEvents: 'all',
          position: 'relative',
        },
      }
    },
  },
  thumb: {
    position: 'absolute',
  },
  slider: {
    position: 'relative',
    width: '100%',
  },
  sliderTrack: {
    position: 'absolute',
    borderRadius: 3,
    height: 7,
    backgroundColor: theme.default.main,
    width: '100%',
    zIndex: 1,
  },
  sliderRange: {
    position: 'absolute',
    borderRadius: 3,
    height: 7,
    backgroundColor: theme.primary.main,
    opacity: 0.6,
    zIndex: 2,
  },
  sliderLeftValue: {
    position: 'absolute',
    color: theme.primary.contrast,
    fontSize: 12,
    right: 'calc(100% + 8px)',
    top: -6,
    padding: '2px 4px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
  },
  sliderRightValue: {
    position: 'absolute',
    color: theme.primary.contrast,
    fontSize: 12,
    left: 'calc(100% + 8px)',
    top: -6,
    padding: '2px 4px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
  },
  inputMinValue: (props:IStyles) => ({
    position: 'absolute',
    zIndex: 5,
    bottom: 23,
    left: props.minLeft,
    fontSize: 14,
    color: theme.text.hint,
    width: 'fit-content',
    display: 'none',
    transform: 'translate(-50%, 0)',
    '&>div': {
      width: 'fit-content',
    },
    '&>div>div': {
      height: 32,
      padding: '8px 7px',
      width: 'fit-content',
    },
    '& input': {
      minWidth: 10,
      textAlign: 'center',
      paddingTop: 0,
      lineHeight: 16,
      height: '-webkit-fill-available',
      border: 'none',
    },
    '&$show': {
      display: 'block',
    }
  }),
  inputMaxValue:(props:IStyles) => ( {
    position: 'absolute',
    zIndex: 5,
    bottom: 23,
    right: 0,
    left: props.maxLeft,
    fontSize: 14,
    color: theme.text.hint,
    width: 'fit-content',
    display: 'none',
    transform: 'translate(-50%, 0)',
    '&>div': {
      width: 'fit-content',
    },
    '&>div>div': {
      height: 32,
      padding: '8px 7px',
      width: 'fit-content',
    },
    '& input': {
      minWidth: 10,
      textAlign: 'center',
      paddingTop: 0,
      lineHeight: 16,
      height: '-webkit-fill-available',
      border: 'none',
    },
    '&$show': {
      display: 'block',
    }
  }),
  thumbMinLabel: (props:IStyles) => ({
    position: 'absolute',
    color: theme.primary.contrast,
    fontSize: 12,
    bottom: 23,
    left: props.minLeft,
    padding: '2px 4px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
    display: 'none',
    transform: 'translate(-50%, 0)',
    '&$show': {
      display: 'block',
    }
  }),
  thumbMaxLabel: (props:IStyles) => ({
    position: 'absolute',
    color: theme.primary.contrast,
    fontSize: 12,
    bottom: 23,
    left: props.maxLeft,
    padding: '2px 4px',
    backgroundColor: theme.default.dark,
    borderRadius: 4,
    display: 'none',
    transform: 'translate(-50%, 0)',
    '&$show': {
      display: 'block',
    }
  }),
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
    }
  },
  dotsContainer: {
    position: 'absolute',
    width: '100%',
    height: '7px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.default.light,
  },
}))
