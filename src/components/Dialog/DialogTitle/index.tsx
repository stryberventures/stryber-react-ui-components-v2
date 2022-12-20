import React from 'react';
import classNames from 'classnames';
import Text from '../../Text';
import useStyles from './styles';


export interface IDialogTitle extends React.HTMLAttributes<HTMLElement> {
  children: string | React.ReactNode;
  className?: string;
}

const DialogTitle: React.FC<IDialogTitle> = (props) => {
  const { children, className } = props;
  const classes = useStyles(props);
  return typeof children == 'string'
    ? (
      <Text
        variant="h4"
        weight="semiBold"
        className={classNames(classes.dialogTitle, className)}
      >
        {children}
      </Text>
    )
    : (
      <div className={classNames(classes.dialogTitle, className)}>
        {children}
      </div>
    );
};

export default DialogTitle;
