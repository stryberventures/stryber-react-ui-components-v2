import { CSSProperties } from 'react';

export enum TextVariant {
  display1 = 'display1',
  display2 = 'display2',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  body1 = 'body1',
  body2 = 'body2',
  body3 = 'body3',
  caption1 = 'caption1',
  caption2 = 'caption2',
  components1 = 'components1',
  components2 = 'components2',
  components3 = 'components3',
  buttonLabelMini = 'buttonLabelMini',
  buttonLabelLarge = 'buttonLabelLarge',
}

export type CreateTextVariantStylesReturnType = {
  [key in TextVariant]: CSSProperties;
};
