import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export enum TextVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  quote = 'quote',
  label = 'label',
  body = 'body',
  description = 'description',
  subline = 'subline',
  caption = 'caption',
  smallText = 'smallText',
  footnote = 'footnote',
  buttonLabel = 'buttonLabel',
  labelHighlight = 'labelHighlight',
}

type TTextVariant = keyof typeof TextVariant;

export interface IText extends React.HTMLAttributes<HTMLElement> {
  className?: string,
  children: string,
  align?: 'left' | 'center' | 'right';
  variant?: TTextVariant;
  component?: TTag,
}

type TTag = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'label' | 'p' | 'q' | 'b' | 'i' | 'small' | 'strong' | 'em' | 'del' | 'ins' | 'sub' | 'sup'>;

function defineTag(variant: TTextVariant): TTag {
  switch (variant) {
    case TextVariant.quote:
      return 'q';
    case TextVariant.h1:
    case TextVariant.h2:
    case TextVariant.h3:
    case TextVariant.h4:
    case TextVariant.label:
      return variant;
    default:
      return 'span';
  }
}

const Text: React.FC<IText> = (props) => {
  const {
    className,
    children,
    component,
    variant = 'body',
    align = 'left',
    ...rest
  } = props;
  const classes = useStyles(props);
  const Tag = component || defineTag(variant);
  return (
    <Tag
      data-testid={'test-text-element'}
      className={classNames(
        classes.text,
        classes[variant],
        classes[align],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Text;
