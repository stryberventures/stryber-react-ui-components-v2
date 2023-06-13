import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

type TElevationVariant =
  | 'extraLight'
  | 'light'
  | 'medium'
  | 'heavy'
  | 'extraHeavy';

export interface IElevation extends React.HTMLAttributes<any> {
  children: React.ReactNode;
  variant?: TElevationVariant;
  component?: keyof JSX.IntrinsicElements;
}

const Elevation: React.FC<IElevation> = (props) => {
  const {
    variant = 'extraLight',
    component: Tag = 'div',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles();
  return (
    <Tag
      className={classNames(classes.elevation, classes[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Elevation;

Elevation.defaultProps = {
  variant: 'extraLight',
  component: 'div',
};
