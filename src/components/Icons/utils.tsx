import React from 'react';
import { ICommonIconProps, TCommonIconVariants, TPathDProp } from './types';
import { useTheme } from '../Theme';

export const createPathDComponent = (
  pathDProp: TPathDProp | TPathDProp[],
  fill: string,
) => {
  if (Array.isArray(pathDProp)) {
    return pathDProp.map((pathD, idx) => (
      <path key={idx} d={pathD} fill={fill} />
    ));
  }

  return <path d={pathDProp} fill={fill} />;
};

export const useCommonIcon = (props: ICommonIconProps<any>) => {
  const { fill, variant = 'initial', ...rest } = props;
  const { theme } = useTheme();
  const fillColor = fill || theme.colors.text.headline;

  return { fill: fillColor, variant, rest };
};

const parseSvgPathD = (svg: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return [...svg.matchAll(/<path d="(.*?)"/g)].map(r => r[1]);
}

// Only works with simple icons(which svg tag contains only <path d="..." />)
export const createCommonIcon = <Variants extends string>(
  name: string,
  iconVariants: TCommonIconVariants,
) => {
  const CommonIcon: React.FC<ICommonIconProps<Variants>> = (props) => {
    //Take the first variant as default
    const firstVariant = Object.keys(iconVariants)[0];
    const { fill, variant = firstVariant, ...rest } = props;
    const { theme } = useTheme();
    const fillColor = fill || theme.colors.text.headline;
    return (
      <svg />
    );
  };
  CommonIcon.displayName = name;
  CommonIcon.defaultProps = { width: 24, height: 24 };

  return CommonIcon;
};
