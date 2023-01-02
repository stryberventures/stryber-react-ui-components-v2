import { SVGProps } from 'react';

export type TPathDProp = 'd';

export type TCommonIconVariants = {
  [key: string]: string;
};

export interface ICommonIconProps<Variants> extends SVGProps<SVGSVGElement> {
  variant?: Variants;
}
