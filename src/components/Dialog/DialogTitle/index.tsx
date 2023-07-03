import React from 'react';
import classNames from 'classnames';
import Text from '../../Text';
import useStyles from './styles';

export interface IDialogTitle extends React.HTMLAttributes<HTMLElement> {
  children: string | React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

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
