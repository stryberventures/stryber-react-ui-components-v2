import React  from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export interface IDialogText extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const DialogText: React.FC<IDialogText> = (props) => {
  const { children, className } = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.dialogText, className)}>
      {children}
    </div>
  )
};

export default DialogText;
