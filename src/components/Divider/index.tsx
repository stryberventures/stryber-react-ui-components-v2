import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export interface IDivider extends React.HTMLAttributes<any> {
  component?: keyof JSX.IntrinsicElements;
}

const Divider: React.FC<IDivider> = (props) => {
  const {
    className,
    component,
    ...rest
  } = props;
  const classes = useStyles();
  const Tag = component || 'hr'
  return (
    <Tag
      className={classNames(
        classes.divider,
        className,
      )}
      {...rest}
    />
  );
}

export default Divider;

Divider.defaultProps = {
  component: 'div',
};
