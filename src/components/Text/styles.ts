import { TextVariant } from './types';
import { createStyles, toRem } from '../Theme';

export default createStyles(
  (theme) => ({
    text: {
      display: 'inline-block',
      fontFamily: theme.font,
    },
    [TextVariant.display1]: {
      fontSize: toRem(72),
      lineHeight: toRem(80),
    },
    [TextVariant.display2]: {
      fontSize: toRem(60),
      lineHeight: toRem(72),
    },
    [TextVariant.h1]: {
      padding: 0,
      margin: 0,
      fontSize: toRem(48),
      lineHeight: toRem(56),
    },
    [TextVariant.h2]: {
      padding: 0,
      margin: 0,
      fontSize: toRem(38),
      lineHeight: toRem(46),
    },
    [TextVariant.h3]: {
      padding: 0,
      margin: 0,
      fontSize: toRem(32),
      lineHeight: toRem(40),
    },
    [TextVariant.h4]: {
      padding: 0,
      margin: 0,
      fontSize: toRem(28),
      lineHeight: toRem(34),
    },
    [TextVariant.body1]: {
      fontSize: toRem(18),
      lineHeight: toRem(28),
    },
    [TextVariant.body2]: {
      fontSize: toRem(16),
      lineHeight: toRem(24),
    },
    [TextVariant.body3]: {
      fontSize: toRem(14),
      lineHeight: toRem(20),
    },
    [TextVariant.caption1]: {
      fontSize: toRem(12),
      lineHeight: toRem(14),
    },
    [TextVariant.caption2]: {
      fontSize: toRem(10),
      lineHeight: toRem(12),
    },
    [TextVariant.components1]: {
      fontSize: toRem(16),
    },
    [TextVariant.components2]: {
      fontSize: toRem(14),
    },
    [TextVariant.components3]: {
      fontSize: toRem(10),
    },
    [TextVariant.buttonLabelMini]: {
      fontSize: toRem(10),
    },
    [TextVariant.buttonLabelLarge]: {
      fontSize: toRem(16),
    },
    left: {
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
    regular: {
      fontWeight: '400',
    },
    medium: {
      fontWeight: '500',
    },
    semiBold: {
      fontWeight: '600',
    },
    bold: {
      fontWeight: '700',
    },
  }),
  { internalUsage: true }
);
