import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import useStyles from './styles';


export interface ITextLink extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: string,
  href: string,
  color?: 'primary' | 'secondary',
  size?: 'small' | 'medium' | 'large',
  weight?: 'regular' | 'semiBold' | 'bold',
  disabled?: boolean,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
}

const TextLink: React.FC<ITextLink> = (props) => {
  const { children, size = 'medium', weight = 'regular', disabled, iconLeft, iconRight, className, ...rest } = props;
  const classes = useStyles()(props);

  return (
    <a
      className={classNames(
        classes.textLink,
        className, {
          [classes.disabled]: disabled
        })}
      {...rest}
    >
      {iconLeft}
      <Text
        variant={`body${(size == 'small') ? '3' : (size == 'medium') ? '2' : '1'}`}
        weight={weight}
        className={classes.text}
      >
        {children}
      </Text>
      {iconRight}
    </a>
  );
}

TextLink.defaultProps = {
  color: 'primary',
  size: 'medium',
  weight: 'regular',
  disabled: false,
}

export default TextLink;
