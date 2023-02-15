import { createStyles, toRem } from '../../Theme';
import { ITab } from './index';

export default createStyles((theme) => {
  return ({
    tab: (color: ITab['color']) => ({
      display: 'flex',
      alignItems: 'center',
      gap: toRem(18),
      padding: `0 ${toRem(22)}`,
      cursor: 'pointer',
      color: theme.colors.text.secondary,
      transition: 'color .3s, border-color .3s',
      '& svg path': {
        fill: theme.colors.text.secondary,
      },
      '&$active': {
        color: theme.colors[color!].dark600,
        '& svg path': {
          fill: theme.colors[color!].dark600,
        },
      },
      '&:active': {
        color: theme.colors[color!].medium300,
        '& svg path': {
          fill: theme.colors[color!].medium300,
        },
      },
      '&:hover, &:not($disabled):focus-visible': {
        color: theme.colors[color!].medium400,
        outline: 'none',
        '& svg path': {
          fill: [theme.colors[color!].medium400, '!important'],
        },
      },
      '&$disabled': {
        pointerEvents: 'none',
        userSelect: 'none',
        outline: 'none',
        color: theme.colors.text.disabled,
        '& svg path': {
          fill: theme.colors.text.disabled,
        },
      },
    }),
    small: {
      minHeight: toRem(48),
    },
    medium: {
      minHeight: toRem(48),
    },
    large: {
      minHeight: toRem(58),
    },
    horizontal: (color: ITab['color']) => ({
      justifyContent: 'center',
      borderBottom: `${toRem(3)} solid transparent`,
      '&$active': {
        borderBottomColor: theme.colors[color!].dark600,
      },
    }),
    vertical: (color: ITab['color']) => ({
      justifyContent: 'flex-start',
      borderBottom: 'none',
      borderLeft: `${toRem(3)} solid transparent`,
      '&$active': {
        borderLeftColor: theme.colors[color!].dark600,
      },
    }),
    active: {},
    disabled: {},
    label: {
      color: 'inherit',
    },
    iconWrapper: (color: ITab['color']) => ({
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      '&:focus-visible *': {
        fill: theme.colors[color!].medium400,
      }
    })
  })
}, { internalUsage: true });
