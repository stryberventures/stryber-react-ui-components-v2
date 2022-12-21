import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import useStyles from './styles';

interface IErrorMessage {
  text: string,
  className?: string,
}

export const ErrorMessage = (props: IErrorMessage) => {
  const { text, className } = props;
  const classes = useStyles();

  return (
    <Text
      variant="components2"
      weight="regular"
      className={classNames(classes.errorMessage, className)}
    >
      {text}
    </Text>
  );
}
