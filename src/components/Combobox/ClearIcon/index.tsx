import React from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../../Icons';
import useStyles from './styles';
import { toRem } from '../../Theme';

interface IClearButton extends React.HTMLAttributes<HTMLDivElement> {}

const ClearIcon: React.FC<IClearButton> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.clearIcon, className)} {...rest}>
      <CloseIcon width={toRem(12)} height={toRem(12)} />
    </div>
  );
};

export default ClearIcon;
