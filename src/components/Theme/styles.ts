import { createStyles } from './';

export default createStyles(() => ({
  noHighlightOnTouch: {
    '-webkit-tap-highlight-color': 'transparent',
    '&:hover': {
      cursor: 'pointer',
    },
  }
}));
