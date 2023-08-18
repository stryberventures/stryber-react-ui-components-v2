import { CreateTextVariantStylesReturnType, TextVariant } from './types';

import { createStyles } from '../Theme';
import { ThemeType } from '../Theme/types';

// Creates classes for each text variant
// Example: { [TextVariant.display1]: theme.text[TextVariant.display1], ... }
const createTextVariantStyles = (
  theme: ThemeType
): CreateTextVariantStylesReturnType => {
  let textVariantStyles = {};
  for (const item in TextVariant) {
    if (isNaN(Number(item))) {
      textVariantStyles = {
        ...textVariantStyles,
        [item]: theme.text[item as TextVariant],
      };
    }
  }
  return textVariantStyles as CreateTextVariantStylesReturnType;
};

export default createStyles(
  (theme) => ({
    text: {
      display: 'inline-block',
      fontFamily: theme.font,
    },
    ...createTextVariantStyles(theme),
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
