import React  from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export interface IDialogActions extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const DialogActions: React.FC<IDialogActions> = (props) => {
  const { children, className } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.dialogActions, className)}>
      {children}
    </div>
  )
};

export default DialogActions;
