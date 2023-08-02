import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import { useDir } from '../Theme';
import useStyles from './styles';

interface IHintMessage extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  disabled?: boolean;
}

export const HintMessage = (props: IHintMessage) => {
  const { text, className, disabled, dir = useDir(props.dir), ...rest } = props;
  const classes = useStyles();
  return (
    <Text
      variant="components2"
      weight="regular"
      {...rest}
      dir={dir}
      className={classNames(classes.hintMessage, className, {
        [classes.disabled]: disabled,
      })}
    >
      {text}
    </Text>
  );
};
