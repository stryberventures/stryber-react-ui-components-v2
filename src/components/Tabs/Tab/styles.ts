import { createStyles, toRem } from '../../Theme';
import { ITab } from './index';


export default createStyles((theme) => {
  return ({
    tab: (color: ITab['color']) => ({
      display: 'flex',
      alignItems: 'center',
      gap: toRem(16),
      cursor: 'pointer',
      color: theme.colors.text.secondary,
      transition: 'color .3s',
      position: 'relative',
      '&:after': {
        display: 'block',
        position: 'absolute',
        content: '""',
        borderRadius: toRem(4),
        transition: 'background-color .3s',
        zIndex: 2,
      },
      '& svg path': {
        transition: 'fill .3s',
        fill: theme.colors.text.secondary,
      },
      '&$active': {
        color: theme.colors[color!].dark600,
        '& svg path': {
          fill: theme.colors[color!].dark600,
        },
      },
      '&:active:hover': {
        color: theme.colors[color!].medium300,
        '& svg path': {
          fill: [theme.colors[color!].medium300, '!important'],
        },
      },
      '&:hover': {
        color: theme.colors[color!].medium400,
        '& svg path': {
          fill: [theme.colors[color!].medium400, '!important'],
        },
      },
      '&:not($disabled):focus-visible': {
        backgroundColor: theme.colors[color!].extraLight50,
        outline: 'none',
      },
      '&:not($disabled):focus-visible:active': {
        color: theme.colors[color!].medium300,
        outline: 'none',
        '& svg path': {
          fill: theme.colors[color!].medium300,
        }
      },
      '&$disabled': {
        pointerEvents: 'none',
        userSelect: 'none',
        outline: 'none',
        color: theme.colors.text.disabled,
        '& svg path': {
          fill: [theme.colors.text.disabled, '!important'],
        },
      },
      '&$active:not($disabled)': {
        '&:after': {
          backgroundColor: theme.colors[color!].dark600,
        },
      },
      '&$active$disabled': {
        '&:after': {
          backgroundColor: theme.colors.neutralGray.light200,
        },
      },
    }),
    small: {
      height: toRem(48),
    },
    medium: {
      height: toRem(56),
    },
    fitted: {
      flexGrow: 1,
    },
    horizontal: {
      justifyContent: 'center',
      padding: `0 ${toRem(20)}`,
      '&:after': {
        bottom: 0,
        left: 0,
        width: '100%',
        height: toRem(2),
      },
    },
    vertical: {
      justifyContent: 'flex-start',
      padding: `0 ${toRem(50)}`,
      '&:after': {
        top: 0,
        left: 0,
        width: toRem(2),
        height: '100%',
      },
    },
    active: {},
    disabled: {},
    label: {
      color: 'inherit',
    },
  })
}, { internalUsage: true });
