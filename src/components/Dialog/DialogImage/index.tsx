import React from 'react';
import useStyles from "./styles";
import classNames from "classnames";

export interface IDialogImage extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
}

const DialogImage: React.FC<IDialogImage> = (props) => {
  const { className, ...etc } = props;
  const classes = useStyles();
  return (
    <img
      {...etc}
      className={classNames(classes.dialogImage, className)}
    />
  );
};

export default DialogImage;
