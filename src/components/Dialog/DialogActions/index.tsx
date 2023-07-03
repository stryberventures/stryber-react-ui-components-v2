import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface IDialogActions extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  layout?: 'column' | 'row' | 'shrunk';
}

const DialogActions: React.FC<IDialogActions> = (props) => {
  const { children, className, layout = 'column' } = props;
  const classes = useStyles();
  return (
    <div className={classNames(
      classes.dialogActions,
      {
        [classes.layoutRow]: layout === 'row',
        [classes.layoutShrunk]: layout === 'shrunk',
      },
      className
    )}>
      {children}
    </div>
  );
};

export default DialogActions;
