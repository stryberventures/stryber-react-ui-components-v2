import React from 'react';
import useStyles from './styles';
import classNames from 'classnames';

interface IHintMessage extends React.HTMLAttributes<HTMLDivElement> {
  text: string,
  className?: string,
  disabled?: boolean,
}

export const HintMessage = (props: IHintMessage) => {
  const { text, className, disabled } = props;
  const classes = useStyles();

  return (
    <div className={classNames(classes.message, className, {
      [classes.disabled]: disabled,
    })}
    >
      {text}
    </div>
  );
}
