import React  from 'react';
import classnames from 'classnames';
import useStyles from './styles';


interface IDialogButton extends React.HTMLAttributes<HTMLSpanElement> {
  children: string | React.ReactNode;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  className?: string;
  onClick?: () => void;
}

const DialogButton: React.FC<IDialogButton> = (props) => {
  const { children, iconLeft, iconRight, className, onClick } = props;
  const classes = useStyles(props);
  return (
    <span
      role="button"
      tabIndex={0}
      className={classnames(classes.dialogButton, className)}
      onClick={onClick}
    >
      {iconLeft}
      {children}
      {iconRight}
    </span>
  );
};

export default DialogButton;
