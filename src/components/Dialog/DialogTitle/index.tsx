import React from 'react';
import classNames from 'classnames';
import Text, { IText } from '../../Text';
import useStyles from './styles';

export interface IDialogTitle extends IText {}

const DialogTitle: React.FC<IDialogTitle> = (props) => {
  const { children, className, align = 'left' } = props;
  const classes = useStyles();
  return typeof children == 'string' ? (
    <Text
      variant="body1"
      weight="medium"
      align={align}
      className={classNames(classes.dialogTitleText, className)}
    >
      {children}
    </Text>
  ) : (
    <div className={classNames(classes.dialogTitleBlock, className)}>
      {children}
    </div>
  );
};

export default DialogTitle;
