import { createStyles } from '../Theme';

export default createStyles((theme) => ({
  text: {
    fontFamily: theme.font,
  },
  h1: {
    color: theme.text.primary,
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 1.3,
  },
  h2: {
    color: theme.text.primary,
    fontSize: 56,
    fontWeight: '700',
    lineHeight: 1.3,
  },
  h3: {
    color: theme.text.primary,
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 1.25,
  },
  h4: {
    color: theme.text.primary,
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 1.5,
  },
  subline: {
    color: theme.text.hint,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 1.5,
  },
  body: {
    color: theme.text.hint,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  quote: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 1.5,
    fontStyle: 'italic',
  },
  description: {
    color: theme.text.hint,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 1.5,
  },
  caption: {
    color: theme.text.hint,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  smallText: {
    color: theme.text.primary,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  footnote: {
    color: theme.text.primary,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  buttonLabel: {
    color: theme.text.primary,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 1.5,
  },
  label: {
    color: theme.text.hint,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 1.2,
  },
  labelHighlight: {
    color: theme.text.primary,
    fontSize: 14,
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
}));
