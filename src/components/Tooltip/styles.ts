import { createStyles, toRem } from '../Theme';
import { ITooltip } from './index';

const PADDING = 16;
const ARROW_HEIGHT = 5;
const ARROW_SHIFT = 15;
const DISTANCE_TO_TARGET = 6;

export default () =>
  createStyles(
    (theme) => ({
      tooltip: {
        position: 'relative',
        width: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: theme.font,
        boxSizing: 'border-box',
        '& *, *:after, *:before': {
          boxSizing: 'inherit',
        },
      },
      tooltipTarget: (props: ITooltip) => ({
        cursor: 'pointer',
        padding: toRem(PADDING),
        '&:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 2px white, 0 0 0 4px ${
            theme.colors[props.color!].light200
          }`,
          borderRadius: toRem(12),
        },
      }),
      tooltipContainer: {
        position: 'absolute',
        zIndex: 99,
      },
      tooltipWrapper: (props: ITooltip) => ({
        direction: props.dir || 'inherit',
        padding: toRem(PADDING),
      }),
      elevation: {
        borderRadius: toRem(4),
      },
      tooltipBox: (props: ITooltip) => ({
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        maxWidth: toRem(320),
        width: 'max-content',
        padding: toRem(12),
        position: 'relative',
        fontFamily: theme.font,
        fontSize: toRem(14),
        fontWeight: 400,
        '&:after': {
          display: props.noArrow ? 'none' : 'block',
          content: '""',
          position: 'absolute',
          width: toRem(12),
          height: toRem(12),
          transform: 'rotate(45deg)',
          backgroundColor: theme.colors.neutralGray.extraLight50,
          boxShadow: '1px 1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      visible: (props: ITooltip) => ({
        '& $title': {
          [props.dir === 'rtl' ? 'paddingLeft' : 'paddingRight']: toRem(24),
        },
      }),
      title: {
        color: theme.colors.text.headline,
        marginBottom: toRem(4),
        lineHeight: '150%',
      },
      text: {
        lineHeight: '120%',
      },
      light: {
        backgroundColor: theme.colors.neutralGray.extraLight50,
        color: theme.colors.text.secondary,
      },
      dark: {
        backgroundColor: theme.colors.neutralGray.extraDark900,
        color: theme.colors.text.tint,
        '& $tooltipBox': {
          '& $title': {
            color: theme.colors.neutralGray.light200,
          },
          '&:after': {
            backgroundColor: theme.colors.neutralGray.extraDark900,
          },
        },
      },
      top: {
        display: 'flex',
        justifyContent: 'center',
        bottom: getTooltipPosition(),
        '& $tooltipBox': {
          margin: '0 auto',
        },
        '& $tooltipBox:after': {
          bottom: toRem(-ARROW_HEIGHT),
          left: `calc(50% - ${toRem(DISTANCE_TO_TARGET)})`,
        },
      },
      topStart: (props: ITooltip) => ({
        bottom: getTooltipPosition(),
        margin: 'initial',
        [props.dir === 'rtl' ? 'right' : 'left']: 0,
        '& $tooltipBox:after': {
          bottom: toRem(-ARROW_HEIGHT),
          [props.dir === 'rtl' ? 'right' : 'left']: toRem(ARROW_SHIFT),
          [props.dir === 'rtl' ? 'left' : 'right']: 'initial',
        },
      }),
      topEnd: (props: ITooltip) => ({
        bottom: getTooltipPosition(),
        margin: 'initial',
        [props.dir === 'rtl' ? 'left' : 'right']: 0,
        '& $tooltipBox:after': {
          bottom: toRem(-ARROW_HEIGHT),
          [props.dir === 'rtl' ? 'left' : 'right']: toRem(ARROW_SHIFT),
          [props.dir === 'rtl' ? 'right' : 'left']: 'initial',
        },
      }),
      bottom: {
        display: 'flex',
        justifyContent: 'center',
        top: getTooltipPosition(),
        '& $tooltipBox': {
          margin: '0 auto',
        },
        '& $tooltipBox:after': {
          top: toRem(-ARROW_HEIGHT),
          left: `calc(50% - ${toRem(DISTANCE_TO_TARGET)})`,
          boxShadow: '-1px -1px 1px rgba(102, 112, 133, 0.1)',
        },
      },
      bottomStart: (props: ITooltip) => ({
        margin: 'initial',
        top: getTooltipPosition(),
        [props.dir === 'rtl' ? 'right' : 'left']: 0,
        '& $tooltipBox:after': {
          top: toRem(-ARROW_HEIGHT),
          [props.dir === 'rtl' ? 'right' : 'left']: toRem(ARROW_SHIFT),
          boxShadow: '-1px -1px 1px rgba(102, 112, 133, 0.1)',
        },
      }),
      bottomEnd: (props: ITooltip) => ({
        top: getTooltipPosition(),
        margin: 'initial',
        [props.dir === 'rtl' ? 'left' : 'right']: 0,
        '& $tooltipBox:after': {
          top: toRem(-ARROW_HEIGHT),
          [props.dir === 'rtl' ? 'left' : 'right']: toRem(ARROW_SHIFT),
          boxShadow: '-1px -1px 1px rgba(102, 112, 133, 0.1)',
        },
      }),
      right: (props: ITooltip) => ({
        height: '100%',
        [props.dir === 'rtl' ? 'right' : 'left']: getTooltipPosition(),
        top: 0,
        display: 'flex',
        alignItems: 'center',
        '& $tooltipBox:after': {
          top: `calc(50% - ${toRem(ARROW_HEIGHT)})`,
          [props.dir === 'rtl' ? 'right' : 'left']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '-1px 1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      rightStart: (props: ITooltip) => ({
        [props.dir === 'rtl' ? 'right' : 'left']: getTooltipPosition(),
        top: `${toRem(-PADDING + ARROW_HEIGHT)}`,
        display: 'flex',
        alignItems: 'flex-end',
        '& $tooltipBox:after': {
          top: toRem(ARROW_SHIFT),
          [props.dir === 'rtl' ? 'right' : 'left']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '-1px 1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      rightEnd: (props: ITooltip) => ({
        [props.dir === 'rtl' ? 'right' : 'left']: getTooltipPosition(),
        bottom: toRem(-PADDING + ARROW_HEIGHT),
        display: 'flex',
        alignItems: 'flex-start',
        '& $tooltipBox:after': {
          bottom: toRem(ARROW_SHIFT),
          [props.dir === 'rtl' ? 'right' : 'left']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '-1px 1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      left: (props: ITooltip) => ({
        height: '100%',
        [props.dir === 'rtl' ? 'left' : 'right']: getTooltipPosition(),
        top: 0,
        display: 'flex',
        alignItems: 'center',
        '& $tooltipBox:after': {
          top: `calc(50% - ${toRem(ARROW_HEIGHT)})`,
          left: 'initial',
          [props.dir === 'rtl' ? 'left' : 'right']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '1px -1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      leftStart: (props: ITooltip) => ({
        [props.dir === 'rtl' ? 'left' : 'right']: getTooltipPosition(),
        top: toRem(-PADDING + ARROW_HEIGHT),
        display: 'flex',
        alignItems: 'flex-end',
        '& $tooltipBox:after': {
          top: toRem(ARROW_SHIFT),
          left: 'initial',
          [props.dir === 'rtl' ? 'left' : 'right']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '1px -1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      leftEnd: (props: ITooltip) => ({
        [props.dir === 'rtl' ? 'left' : 'right']: getTooltipPosition(),
        bottom: toRem(-PADDING + ARROW_HEIGHT),
        display: 'flex',
        alignItems: 'flex-start',
        '& $tooltipBox:after': {
          bottom: toRem(ARROW_SHIFT),
          left: 'initial',
          [props.dir === 'rtl' ? 'left' : 'right']: toRem(-ARROW_HEIGHT),
          transform: `rotate(${props.dir === 'rtl' ? 225 : 45}deg)`,
          boxShadow: '1px -1px 1px rgba(102, 112, 133, 0.2)',
        },
      }),
      animatedEnter: {
        opacity: 0,
      },
      animatedEnterActive: {
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms',
      },
      animatedExit: {
        opacity: 1,
      },
      animatedExitActive: {
        opacity: 0,
        transition: 'opacity 300ms, transform 300ms',
      },
    }),
    { internalUsage: true }
  );

function getTooltipPosition() {
  return `calc(100% - ${toRem(
    PADDING * 2 - ARROW_HEIGHT * 2 - DISTANCE_TO_TARGET
  )})`;
}
