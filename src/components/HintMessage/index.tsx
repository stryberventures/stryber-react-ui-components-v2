import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';
import Text from '../Text';

interface IHintMessage extends React.HTMLAttributes<HTMLDivElement> {
  text: string,
  className?: string,
  disabled?: boolean,
}

export const HintMessage = (props: IHintMessage) => {
  const { text, className, disabled, ...rest } = props;
  const classes = useStyles();

  return (
    <Text
      variant="components2"
      weight="regular"
      {...rest}
      className={classNames(classes.hintMessage, className, {
        [classes.disabled]: disabled,
      })}
    >
      {text}
    </Text>
  );
}
