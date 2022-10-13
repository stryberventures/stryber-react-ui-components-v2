import React  from 'react';
import classNames from 'classnames';
import Text from '../../Text';
import useStyles from './styles';


export interface IDialogTitle extends React.HTMLAttributes<HTMLElement> {
  children: string;
  className?: string;
}

const DialogTitle: React.FC<IDialogTitle> = (props) => {
  const { children, className } = props;
  const classes = useStyles(props);
  return (
    <Text
      variant="subline"
      className={classNames(classes.dialogTitle, className)}
    >
      {children}
    </Text>
  );
};

export default DialogTitle;
