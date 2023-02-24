import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { InfoIcon } from '../Icons';
import { useTheme } from '../Theme';
import useStyles from './styles';

interface IErrorMessage {
  text: string,
  className?: string,
}

export const ErrorMessage = (props: IErrorMessage) => {
  const { text, className } = props;
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <Text
      variant="components2"
      weight="regular"
      className={classNames(classes.errorMessage, className)}
    >
      <InfoIcon
        variant="filled"
        fill={theme.colors.error.dark600}
        className={classes.icon}
      />
      {text}
    </Text>
  );
}
