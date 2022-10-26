import { createStyles } from '../Theme';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
  tooltip: {
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
    fontSize: toRem(14),
    fontWeight: 400,
    maxWidth: toRem(320),
    width: 'max-content',
    padding: `${toRem(8)} ${toRem(10)}`,
    borderRadius: toRem(8),
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '0px 0px 16px -4px rgba(16, 24, 40, 0.2), 0px 0px 6px -2px rgba(16, 24, 40, 0.03)',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: toRem(12),
      height: toRem(12),
      borderRadius: toRem(2),
      transform: 'rotate(45deg)',
      backgroundColor: theme.background.default,
      bottom: toRem(-6),
      left: 'calc(50% - 5px)',
    }
  },
  visible: {
    '& $title': {
      paddingRight: toRem(24),
    }
  },
  closeBtn: {
    position: 'absolute',
    top: toRem(8),
    right: toRem(8),
    height: toRem(20),
    width: toRem(20),
    borderRadius: toRem(4),
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
    marginTop: toRem(5),
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
    bottom: `calc(100% + ${toRem(12)})`,
    '& $tooltipBox:after': {
      bottom: toRem(-5),
      left: `calc(50% - ${toRem(6)})`,
    }
  },
  topStart: {
    bottom: `calc(100% + ${toRem(12)})`,
    margin: 'initial',
    right: `calc(100% - ${toRem(32)})`,
    '& $tooltipBox:after': {
      bottom: toRem(-5),
      right: toRem(15),
      left: 'initial',
    }
  },
  topEnd: {
    bottom: `calc(100% + ${toRem(12)})`,
    margin: 'initial',
    left: `calc(100% - ${toRem(32)})`,
    '& $tooltipBox:after': {
      bottom: toRem(-5),
      left: toRem(15),
    }
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    '& $tooltipBox': {
      margin: '0 auto',
    },
    top: `calc(100% + ${toRem(12)})`,
    '& $tooltipBox:after': {
      top: toRem(-5),
      left: `calc(50% - ${toRem(6)})`,
    }
  },
  bottomStart: {
    top: `calc(100% + ${toRem(12)})`,
    margin: 'initial',
    right: `calc(100% - ${toRem(32)})`,
    '& $tooltipBox:after': {
      top: toRem(-5),
      right: toRem(15),
      left: 'initial',
    }
  },
  bottomEnd: {
    top: `calc(100% + ${toRem(12)})`,
    margin: 'initial',
    left: `calc(100% - ${toRem(32)})`,
    '& $tooltipBox:after': {
      top: toRem(-5),
      left: toRem(15),
    }
  },
  right: {
    height: '100%',
    left: `calc(100% + ${toRem(12)})`,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    '& $tooltipBox:after': {
      top: `calc(50% - ${toRem(6)})`,
      left: toRem(-5),
    }
  },
  rightStart: {
    height: '100%',
    left: `calc(100% + ${toRem(12)})`,
    bottom: `calc(100% - ${toRem(32)})`,
    display: 'flex',
    alignItems: 'flex-end',
    '& $tooltipBox:after': {
      bottom: toRem(15),
      left: toRem(-5),
    }
  },
  rightEnd: {
    height: '100%',
    left: `calc(100% + ${toRem(12)})`,
    top: `calc(100% - ${toRem(32)})`,
    display: 'flex',
    alignItems: 'flex-start',
    '& $tooltipBox:after': {
      top: toRem(15),
      left: toRem(-5),
    }
  },
  left: {
    height: '100%',
    right: `calc(100% + ${toRem(12)})`,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    '& $tooltipBox:after': {
      top: `calc(50% - ${toRem(6)})`,
      right: toRem(-5),
      left: 'initial',
    }
  },
  leftStart: {
    height: '100%',
    right: `calc(100% + ${toRem(12)})`,
    bottom: `calc(100% - ${toRem(32)})`,
    display: 'flex',
    alignItems: 'flex-end',
    '& $tooltipBox:after': {
      bottom: toRem(15),
      left: 'initial',
      right: toRem(-5),
    }
  },
  leftEnd: {
    height: '100%',
    right: `calc(100% + ${toRem(12)})`,
    top: `calc(100% - ${toRem(32)})`,
    display: 'flex',
    alignItems: 'flex-start',
    '& $tooltipBox:after': {
      top: toRem(15),
      right: toRem(-5),
      left: 'initial',
    }
  },
}));
