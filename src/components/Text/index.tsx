import React from 'react';
import classNames from 'classnames';
import { TextVariant } from './types';
import { useDir } from '../Theme';
import useStyles from './styles';

export type TTextVariant = keyof typeof TextVariant;

export { TextVariant };

export interface IText extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  align?: 'left' | 'center' | 'right';
  variant?: TTextVariant;
  component?: TTag;
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
}

type TTag = keyof Pick<
  JSX.IntrinsicElements,
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'span'
  | 'label'
  | 'p'
  | 'q'
  | 'b'
  | 'i'
  | 'small'
  | 'strong'
  | 'em'
  | 'del'
  | 'ins'
  | 'sub'
  | 'sup'
  | 'li'
>;

function defineTag(variant: TTextVariant): TTag {
  switch (variant) {
    case TextVariant.h1:
    case TextVariant.h2:
    case TextVariant.h3:
    case TextVariant.h4:
      return variant;
    default:
      return 'span';
  }
}

const aligns = {
  left: ['left', 'right'],
  right: ['right', 'left'],
  center: ['center', 'center'],
};

const Text: React.FC<IText> = (props) => {
  const {
    className,
    children,
    component,
    variant = 'body2',
    align: pAlign = 'left',
    weight = 'regular',
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles();

  const align = aligns[pAlign][dir === 'rtl' ? 1 : 0] as TTextVariant;
  const Tag = component || defineTag(variant);
  return (
    <Tag
      data-testid={'test-text-element'}
      className={classNames(
        classes.text,
        classes[variant],
        classes[align],
        classes[weight],
        className
      )}
      {...rest}
      dir={dir}
    >
      {children}
    </Tag>
  );
};

export default Text;

Text.defaultProps = {
  variant: 'body2',
  align: 'left',
  weight: 'regular',
  component: 'span',
};
