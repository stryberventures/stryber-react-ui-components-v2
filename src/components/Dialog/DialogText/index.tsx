import React from 'react';
import Text from '../../Text';
import useStyles from "./styles";
import classNames from "classnames";

export interface IDialogText extends React.HTMLAttributes<HTMLElement> {
  children: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const DialogText: React.FC<IDialogText> = (props) => {
  const { children, className, align = 'left' } = props;
  const classes = useStyles();
  return (
    <Text
      variant="body3"
      align={align}
      className={classNames(classes.dialogContentText, className)}
    >
      {children}
    </Text>
  );
};

export default DialogText;
