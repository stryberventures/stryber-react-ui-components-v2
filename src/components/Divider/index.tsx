import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


type TDividerVariant = 'fullBleed' | 'inset' | 'middle';

export interface IDivider extends React.HTMLAttributes<any> {
  children: React.ReactNode;
  variant?: TDividerVariant;
  multiline?: boolean;
  component?: keyof JSX.IntrinsicElements;
}

const Divider: React.FC<IDivider> = (props) => {
  const {
    variant = 'fullBleed',
    component: Tag = 'div',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles();
  return (
    <Tag
      className={classNames(
        classes.divider,
        classes[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Divider;

Divider.defaultProps = {
  variant: 'fullBleed',
  component: 'div',
};
