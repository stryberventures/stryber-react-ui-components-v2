import { createStyles } from '../../Theme';


export default createStyles((theme) => ({
  dialogButton: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    transition: 'color .3s',
    cursor: 'pointer',
    color: theme.primary.main,
    fontFamily: theme.font,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '24px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    '& svg': {
      fill: theme.primary.main,
      transition: 'fill .3s',
    },
    '&:active': {
      color: theme.primary.dark,
      '& svg': {
        fill: theme.primary.dark,
      },
    },
    '&:hover': {
      color: theme.text.hint,
      '& svg': {
        fill: theme.text.hint,
      },
    },
  },
}));
