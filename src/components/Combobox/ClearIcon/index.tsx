import React from 'react';
import classNames from 'classnames';
import CloseIcon from '../../Icons/CloseIcon';
import useStyles from './styles';

interface IClearButton extends React.HTMLAttributes<HTMLDivElement> {}

const ClearIcon: React.FC<IClearButton> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.clearIcon, className)} {...rest}>
      <CloseIcon />
    </div>
  );
};

export default ClearIcon;
