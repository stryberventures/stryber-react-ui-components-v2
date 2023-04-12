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
  // TODO why it has TS error? We need to use color from props
  // sortingIconWrapper: (props: ITableHeader) => ({
  //   position: 'relative',
  //   left: `${toRem(-16)}`,
  //   padding: `${theme.spacing[16]}`,
  //   '&:focus-visible': {
  //     outline: 'none',
  //     boxShadow: `0 0 0 2px white, 0 0 0 4px ${theme.colors[props.color!].light200}`,
  //     borderRadius: `${toRem(12)}`,
  //   },
  // }),
  sortingIconWrapper: {
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
      background: theme.colors.primary.extraLight50,
      border: [1, 'solid', theme.colors.primary.extraLight50],
    },
    '&:active': {
      background: theme.colors.primary.light100,
      border: [1, 'solid', theme.colors.primary.light100],
    },
    '&:focus-visible': {
      background: theme.colors.primary.extraLight50,
      border: [1, 'solid', theme.colors.primary.medium300],
      borderRadius: toRem(12),
      outline: 'none',
    },
  },
  sortingIconActive: {
    background: theme.colors.primary.extraLight50,
    border: [1, 'solid', theme.colors.primary.extraLight50],
    '& svg path': {
      fill: theme.colors.primary.medium300,
    },
  },
  sortingIcon: {
    width: toRem(12),
    height: toRem(12),
    minWidth: toRem(12),
    minHeight: toRem(12),
    '& *': {
      fill: theme.colors.text.secondary,
    },
  },
  tooltipTarget: {
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
        background: theme.colors.primary.extraLight50,
        border: [1, 'solid', theme.colors.primary.extraLight50],
      },
      '&:focus-visible': {
        background: theme.colors.primary.extraLight50,
        border: [1, 'solid', theme.colors.primary.medium300],
        boxShadow: 'none',
      },
    },
  },
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
