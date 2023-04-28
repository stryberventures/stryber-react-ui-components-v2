import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { InfoIcon } from '../Icons';
import { useTheme, useDir } from '../Theme';
import useStyles from './styles';

interface IErrorMessage {
  text: string,
  className?: string,
  dir?: string,
}

export const ErrorMessage = (props: IErrorMessage) => {
  const { text, className, dir = useDir(props.dir) } = props;
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <Text
      variant="components2"
      weight="regular"
      dir={dir}
      className={classNames(classes.errorMessage, className)}
    >
      <InfoIcon
        variant="filled"
        fill={theme.colors.error.main500}
        className={classes.icon}
      />
      {text}
    </Text>
  );
}
