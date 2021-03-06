import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

export interface ITextLink extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text: string,
  color?: 'primary' | 'secondary',
  disabled?: boolean,
  iconLeft?: React.ReactNode,
  iconRight?: React.ReactNode,
  className?: string,
}

const TextLink: React.FC<ITextLink> = (props) => {
  const { text, disabled, iconLeft, iconRight, className, ...rest } = props;
  const classes = useStyles(props);

  return (
    <a className={classNames(classes.textLink, className, {
      [classes.disabled]: disabled
    })} {...rest}>
      {iconLeft}
      {text}
      {iconRight}
    </a>
  );
}

TextLink.defaultProps = {
  color: 'primary',
}

export default TextLink;
