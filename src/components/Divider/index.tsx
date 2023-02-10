import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


type TElevationVariant = 'extraLight' | 'light' | 'medium' | 'heavy' | 'extraHeavy';

export interface Elevation extends React.HTMLAttributes<any> {
  children: React.ReactNode;
  variant?: TElevationVariant;
  component?: keyof JSX.IntrinsicElements;
}

const Elevation: React.FC<Elevation> = (props) => {
  const {
    variant = 'extraLight',
    component: Tag = 'div',
    className,
    children,
    ...rest
  } = props;
  const classes = useStyles(props);
  return (
    <Tag
      className={classNames(
        classes.elevation,
        classes[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Elevation;

Elevation.defaultProps = {
  variant: 'extraLight',
  component: 'div',
};
