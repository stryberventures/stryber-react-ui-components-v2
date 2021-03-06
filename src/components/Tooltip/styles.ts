import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  tooltipWrap: {
    position: 'relative',
    width: 'max-content',
    display: 'flex',
    justifyContent: 'center',
  },
  tooltipTarget: {
    cursor: 'pointer',
  },
  tooltipContainer: {
    position: 'absolute',
    zIndex: 99,
  },
  tooltipBox: {
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 400,
    maxWidth: 320,
    width: 'max-content',
    padding: '8px 10px',
    borderRadius: 8,
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '0px 0px 16px -4px rgba(16, 24, 40, 0.2), 0px 0px 6px -2px rgba(16, 24, 40, 0.03)',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 12,
      height: 12,
      borderRadius: 2,
      transform: 'rotate(45deg)',
      backgroundColor: theme.background.default,
      bottom: -6,
      left: 'calc(50% - 5px)',
    }
  },
  visible: {
    '& $title': {
      paddingRight: 24,
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    height: 20,
    width: 20,
    borderRadius: 4,
    backgroundColor: theme.default.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.default.main,
    }
  },
  title: {
    color: theme.text.secondary,
    fontWeight: 500,
    lineHeight: '20px',
  },
  text: {
    marginTop: 5,
  },
  light: {
    '& $tooltipBox': {
      backgroundColor: theme.background.default,
      color: theme.text.hint,
    }
  },
  dark: {
    '& $tooltipBox': {
      backgroundColor: theme.text.primary,
      color: theme.primary.contrast,
      '& $title': {
        color: theme.primary.contrast,
      },
      '&:after': {
        backgroundColor: theme.text.primary
      }
    }
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    '& $tooltipBox': {
      margin: '0 auto',
    },
    bottom: 'calc(100% + 12px)',
    '& $tooltipBox:after': {
      bottom: -5,
      left: 'calc(50% - 6px)',
    }
  },
  topStart: {
    bottom: 'calc(100% + 12px)',
    margin: 'initial',
    right: 'calc(100% - 32px)',
    '& $tooltipBox:after': {
      bottom: -5,
      right: 15,
      left: 'initial',
    }
  },
  topEnd: {
    bottom: 'calc(100% + 12px)',
    margin: 'initial',
    left: 'calc(100% - 32px)',
    '& $tooltipBox:after': {
      bottom: -5,
      left: 15,
    }
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    '& $tooltipBox': {
      margin: '0 auto',
    },
    top: 'calc(100% + 12px)',
    '& $tooltipBox:after': {
      top: -5,
      left: 'calc(50% - 6px)',
    }
  },
  bottomStart: {
    top: 'calc(100% + 12px)',
    margin: 'initial',
    right: 'calc(100% - 32px)',
    '& $tooltipBox:after': {
      top: -5,
      right: 15,
      left: 'initial',
    }
  },
  bottomEnd: {
    top: 'calc(100% + 12px)',
    margin: 'initial',
    left: 'calc(100% - 32px)',
    '& $tooltipBox:after': {
      top: -5,
      left: 15,
    }
  },
  right: {
    height: '100%',
    left: 'calc(100% + 12px)',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    '& $tooltipBox:after': {
      top: 'calc(50% - 6px)',
      left: -5,
    }
  },
  rightStart: {
    height: '100%',
    left: 'calc(100% + 12px)',
    bottom: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'flex-end',
    '& $tooltipBox:after': {
      bottom: 15,
      left: -5,
    }
  },
  rightEnd: {
    height: '100%',
    left: 'calc(100% + 12px)',
    top: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'flex-start',
    '& $tooltipBox:after': {
      top: 15,
      left: -5,
    }
  },
  left: {
    height: '100%',
    right: 'calc(100% + 12px)',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    '& $tooltipBox:after': {
      top: 'calc(50% - 6px)',
      right: -5,
      left: 'initial',
    }
  },
  leftStart: {
    height: '100%',
    right: 'calc(100% + 12px)',
    bottom: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'flex-end',
    '& $tooltipBox:after': {
      bottom: 15,
      left: 'initial',
      right: -5,
    }
  },
  leftEnd: {
    height: '100%',
    right: 'calc(100% + 12px)',
    top: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'flex-start',
    '& $tooltipBox:after': {
      top: 15,
      right: -5,
      left: 'initial',
    }
  },
}));
