import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface IErrorMessage {
  text: string,
  className?: string,
}

export const ErrorMessage = (props: IErrorMessage) => {
  const { text, className } = props;
  const classes = useStyles();

  return (
    <div className={classNames(classes.errorMessage, className)}>{text}</div>
  );
}
