import { ITextArea } from './index';
import { createStyles, toRem } from '../Theme';
import { ThemeType } from '../Theme/types';


const labelMinifiedStyles = (theme: ThemeType) => ({
  '& $labelText': {
    transform: `translateY(${toRem(-6)})`,
    color: theme.colors.text.secondary,
    fontSize: toRem(12),
    lineHeight: '120%',
  },
  '& $textarea': {
    transform: `translateY(${toRem(-6)})`,
    opacity: 1,
  },
});

export default createStyles((theme) => ({
  textAreaWrapper: {
    width: toRem(340),
    height: toRem(136),
    minHeight: toRem(136),
    boxSizing: 'border-box',
    '& *, &:after, &:before': {
      boxSizing: 'inherit',
    },
  },
  fullWidth: {
    width: '100%',
  },
  textArea: (color: ITextArea['color']) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: toRem(4),
    backgroundColor: theme.colors.background.white,
    transition: 'background-color .3s, border-color .3s, box-shadow .3s',
    fontFamily: theme.font,
    '& *': {
      fontFamily: theme.font,
    },
    '&:hover': {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
    '&:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors.neutralGray.medium300}`,
    },
    '&:hover:not($containerError)': {
      border: `${toRem(1)} solid ${theme.colors[color!].medium300}`,
      backgroundColor: theme.colors.neutralGray.extraLight50,
    },
    '&$containerError': {
      border: `${toRem(1)} solid ${theme.colors.error.main500}`,
    },
    '&:has($textarea:focus-visible)': {
      boxShadow: `0 0 0 ${toRem(2)} white, 0 0 0 ${toRem(4)} ${theme.colors[color!].light200}`,
    },
    '&:not($containerError):has($textarea:focus-visible)': {
      border: `${toRem(1)} solid ${theme.colors[color!].main500}`,
    },
    '&$labelInside:has($textarea:focus-visible)': {
      ...labelMinifiedStyles(theme),
    },
    '&$fullWidth': {
      width: '100%',
    },
  }),
  labelInside: {
    '& $label': {
      padding: `${toRem(8)} ${toRem(12)}`,
      marginBottom: 0,
    },
    '& $textarea': {
      opacity: 0,
    }
  },
  labelOutside: {
    '& $textarea': {
      paddingTop: toRem(8),
    }
  },
  labelMinified: {
    ...labelMinifiedStyles(theme),
  },
  containerDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.colors.background.white,
  },
  containerError: {},
  label: {
    display: 'block',
    marginBottom: toRem(8),
    width: '100%',
  },
  labelText: {
    position: 'relative',
    color: theme.colors.text.headline,
    lineHeight: '150%',
    transition: 'font-size .3s, transform .3s, line-height .3s, color .3s',
    '&$textDisabled': {
      // color: theme.colors.text.disabled,
    },
  },
  textarea: {
    flexGrow: 1,
    position: 'relative',
    border: 'none',
    outline: 'none',
    textOverflow: 'ellipsis',
    width: '100%',
    padding: `0 ${toRem(12)} ${toRem(8)}`,
    color: theme.colors.text.headline,
    resize: 'none',
    backgroundColor: 'transparent',
    transition: 'transform .3s, opacity .3s',
    '-webkit-tap-highlight-color': 'transparent',
    '&::placeholder': {
      color: theme.colors.text.disabled,
      fontFamily: theme.font,
    },
    '&:disabled': {
      color: theme.colors.text.disabled,
      overflow: 'hidden',
    },
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    }
  },
  textDisabled: {
    color: `${theme.colors.text.disabled} !important`,
  },
  hintContainer: {
    display: 'grid',
    gap: toRem(8),
    gridTemplateColumns: '1fr minmax(0, max-content)',
    marginTop: toRem(8),
  },
  messagesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: toRem(8),
    gridColumns: 'span 1',
  },
  hint: {
    color: theme.colors.text.secondary,
  },
  lengthContainer: {
    textAlign: 'right',
  },
  error: {
    margin: 0,
  },
}), { internalUsage: true });
