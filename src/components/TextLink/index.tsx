import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { useDir } from '../Theme';
import useStyles from './styles';


export interface ITextLink extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: string,
  href: string,
  color?: 'primary' | 'secondary',
  variant?: 'body1' | 'body2' | 'body3';
  weight?: 'regular' | 'medium',
  disabled?: boolean,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
}

const TextLink: React.FC<ITextLink> = (props) => {
  const {
    children,
    variant = 'body2',
    weight = 'regular',
    disabled,
    iconLeft,
    iconRight,
    className,
    dir = useDir(props.dir),
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });

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
        variant={variant}
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
  variant: 'body2',
  weight: 'regular',
  disabled: false,
}

export default TextLink;
