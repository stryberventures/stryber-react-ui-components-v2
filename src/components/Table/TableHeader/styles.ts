import { createStyles, toRem } from '../../Theme';
import { ITable } from '../index';
import { ITableHeader } from './index';

export default () => createStyles((theme) => ({
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: toRem(44),
    maxHeight: toRem(44),
    backgroundColor: theme.colors.neutralGray.extraLight50,
    borderTop: [1, 'solid', theme.colors.neutralGray.light200],
    borderBottom: [1, 'solid', theme.colors.neutralGray.light200],
  },
  thCell: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    position: 'relative',
    padding: [theme.spacing[12], theme.spacing[24]],
    '&:has($tooltipTarget) $sortingIconWrapper': {
      marginLeft: 0,
    },
    '&:not(:has($tooltipTarget)) $sortingIconWrapper': {
      marginLeft: theme.spacing[8],
    },
  },
  thLabel: {
    color: theme.colors.text.secondary,
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  sortingIconWrapper: (props: ITableHeader) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: toRem(24),
    height: toRem(24),
    padding: theme.spacing[8],
    borderRadius: '50%',
    border: [1, 'solid', 'transparent'],
    cursor: 'pointer',
    transition: 'background-color .3s, border-color .3s',
    '& svg path': {
      transition: 'fill .3s',
    },
    '&:hover': {
      background: theme.colors[props.color!].extraLight50,
      border: [1, 'solid', theme.colors[props.color!].extraLight50],
    },
    '&:active': {
      background: theme.colors[props.color!].light100,
      border: [1, 'solid', theme.colors[props.color!].light100],
    },
    '&:focus-visible': {
      background: theme.colors[props.color!].extraLight50,
      border: [1, 'solid', theme.colors[props.color!].medium300],
      borderRadius: toRem(12),
      outline: 'none',
    },
  }),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  sortingIconActive: (props: ITableHeader) => ({
    background: theme.colors[props.color!].extraLight50,
    border: [1, 'solid', theme.colors[props.color!].extraLight50],
    '& svg path': {
      fill: theme.colors[props.color!].medium300,
    },
  }),
  sortingIcon: {
    width: toRem(12),
    height: toRem(12),
    minWidth: toRem(12),
    minHeight: toRem(12),
    '& *': {
      fill: theme.colors.text.secondary,
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  tooltipTarget: (props: ITableHeader) => ({
    padding: toRem(8),
    '& > [class*="tooltipTarget"]': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: toRem(24),
      height: toRem(24),
      borderRadius: '50%',
      padding: toRem(8),
      border: [1, 'solid', 'transparent'],
      transition: 'background-color .3s, border-color .3s',
      '&:hover': {
        background: theme.colors[props.color!].extraLight50,
        border: [1, 'solid', theme.colors[props.color!].extraLight50],
      },
      '&:focus-visible': {
        background: theme.colors[props.color!].extraLight50,
        border: [1, 'solid', theme.colors[props.color!].medium300],
        boxShadow: 'none',
      },
    },
  }),
  tooltipTargetIcon: {
    width: toRem(12),
    height: toRem(12),
    minWidth: toRem(12),
    minHeight: toRem(12),
    '& *': {
      fill: theme.colors.text.secondary,
    },
  },
}), { internalUsage: true });
