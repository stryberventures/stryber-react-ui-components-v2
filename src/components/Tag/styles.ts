import { createStyles } from '../Theme';
import { defaultTagProps, ITag } from './index';
import toRem from '../../utils/toRem';

const transitionDelay = '.3s';
const transitionAnimation = 'ease-out';

const tagPaddings = {
  small: [toRem(2), toRem(6)],
  medium: [toRem(4), toRem(8)],
  large: [toRem(4), toRem(12)],
}

export default createStyles((theme) => ({
  tag: (props: ITag) => ({
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    padding: tagPaddings[props.size || defaultTagProps.size],
    border: [1, 'solid', theme.colors[props.color!].extraLight50],
    outline: 'none',
    backgroundColor: theme.colors[props.color!].extraLight50,
    color: theme.colors[props.color!].main500,
    cursor: 'pointer',
    transition: `color ${transitionDelay} ${transitionAnimation}, border-color ${transitionDelay} ${transitionAnimation}`,
  }),
  default: (props: ITag) => ({
    '&:hover, &:focus-visible': {
      color: theme.colors[props.color!].medium300,
      borderColor: theme.colors[props.color!].medium400,
      '& svg path': {
        fill: theme.colors[props.color!].medium300,
      }
    },
    '& svg path': {
      fill: theme.colors[props.color!].medium300,
    },
  }),
  round: {
    borderRadius: toRem(100),
  },
  square: {
    borderRadius: toRem(5),
  },
  large: {
    gap: theme.spacing[8],
    height: toRem(32),
  },
  medium: {
    gap: theme.spacing[8],
    height: toRem(24),
  },
  small: {
    gap: theme.spacing[4],
    height: toRem(16),
  },
  text: {
    whiteSpace: 'nowrap',
  },
  iconWrapper: (props: ITag) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: [1, 'solid', theme.colors[props.color!].main500],
    borderRadius: 20,
  }),
  icon: {
    '& path': {
      transition: `fill ${transitionDelay} ${transitionAnimation}`,
    },
  },
  largeIcon: {
    width: toRem(20),
    height: toRem(20),
  },
  mediumIcon: {
    width: toRem(12),
    height: toRem(12),
  },
  smallIcon: {
    width: toRem(10),
    height: toRem(10),
  },
  selected: (props: ITag) => ({
    borderColor: theme.colors[props.color!].light200,
    backgroundColor: theme.colors[props.color!].light200,
    color: theme.colors.contrast.white,
    transition: `border-color ${transitionDelay} ${transitionAnimation}, color ${transitionDelay} ${transitionAnimation}, fill ${transitionDelay} ${transitionAnimation}`,
    '& svg path': {
      fill: theme.colors.contrast.white,
    },
    '&:hover, &:focus-visible': {
      borderColor: theme.colors[props.color!].dark600,
    },
  }),
  '&.selected, &:active': (props: ITag) => ({
    borderColor: theme.colors[props.color!].light200,
    backgroundColor: theme.colors[props.color!].light200,
    color: theme.colors.contrast.white,
  }),
  disabled: (props: ITag) => ({
    color: theme.colors.text.disabled,
    backgroundColor: theme.colors.neutralGray.light100,
    border: [1, 'solid', theme.colors.neutralGray.light100],
    cursor: 'default',
  }),
}), { internalUsage: true });
