import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import useTextStyles from '../Text/styles';


export interface ITextLink extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: string,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  weight: 'normal' | 'semiBold',
  disabled?: boolean,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
}

const TextLink: React.FC<ITextLink> = (props) => {
  const { children, size, weight, disabled, iconLeft, iconRight, className, ...rest } = props;
  const classes = useStyles(props);
  const textClasses = useTextStyles(props);

  return (
    <a
      className={classNames(
        classes.textLink,
        textClasses.components1,
        textClasses.bold,
        className, {
          [classes.disabled]: disabled
        })}
      {...rest}
    >
      {iconLeft}
      {/* TODO use new Text variant */}
      {/* TODO use weight from props */}
      {children}
      {iconRight}
    </a>
  );
}

TextLink.defaultProps = {
  color: 'primary',
}

export default TextLink;
