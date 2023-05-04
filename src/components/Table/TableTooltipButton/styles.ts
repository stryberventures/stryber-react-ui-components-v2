import { createStyles, toRem } from '../../Theme';
import { ITableTooltipButton } from './index';

export default () => createStyles((theme) => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  tooltipTarget: (props: ITableTooltipButton) => ({
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
