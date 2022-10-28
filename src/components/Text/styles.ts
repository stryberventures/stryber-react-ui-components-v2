import { createStyles } from '../Theme';
import { TextVariant } from './types';
import toRem from '../../utils/toRem';


export default createStyles((theme) => ({
  text: {
    display: 'inline-block',
  },
  [TextVariant.h1]: {
    padding: 0,
    margin: 0,
    fontFamily: theme.font,
    fontSize: toRem(64),
    fontWeight: '700',
    lineHeight: 1.3,
  },
  [TextVariant.h2]: {
    padding: 0,
    margin: 0,
    fontFamily: theme.font,
    fontSize: toRem(56),
    fontWeight: '700',
    lineHeight: 1.3,
  },
  [TextVariant.h3]: {
    padding: 0,
    margin: 0,
    fontFamily: theme.font,
    fontSize: toRem(48),
    fontWeight: '700',
    lineHeight: 1.25,
  },
  [TextVariant.h4]: {
    padding: 0,
    margin: 0,
    fontFamily: theme.font,
    fontSize: toRem(32),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.subline]: {
    fontFamily: theme.font,
    fontSize: toRem(24),
    fontWeight: '600',
    lineHeight: 1.5,
  },
  [TextVariant.body]: {
    fontFamily: theme.font,
    fontSize: toRem(16),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.quote]: {
    fontFamily: theme.font,
    fontSize: toRem(40),
    fontWeight: '700',
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
  [TextVariant.description]: {
    fontFamily: theme.font,
    fontSize: toRem(12),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.caption]: {
    fontFamily: theme.font,
    fontSize: toRem(12),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.smallText]: {
    fontFamily: theme.font,
    fontSize: toRem(10),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.footnote]: {
    fontFamily: theme.font,
    fontSize: toRem(10),
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TextVariant.buttonLabel]: {
    fontFamily: theme.font,
    fontSize: toRem(16),
    fontWeight: '700',
    lineHeight: 1.5,
  },
  [TextVariant.label]: {
    fontFamily: theme.font,
    fontSize: toRem(14),
    fontWeight: '400',
    lineHeight: 1.2,
  },
  [TextVariant.labelHighlight]: {
    fontFamily: theme.font,
    fontSize: toRem(14),
    fontWeight: '500',
    lineHeight: 1.5,
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
}), { internalUsage: true });
