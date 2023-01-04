import { SVGProps } from 'react';

export type TPathDProp = 'd';

export type TSingleVariants = 'default';

export type TMoreVariants = 'vertical' | 'horizontal';

export type TCursorVariants = 'arrow' | 'drag' | 'hover';

export type IArrowIconVariant = 'down' | 'up' | 'left' | 'right';

export type TCommonIconVariants = 'default' | 'filled';

export interface ICommonIconProps<Variants> extends SVGProps<SVGSVGElement> {
  variant?: Variants;
}
