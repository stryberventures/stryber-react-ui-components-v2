import React  from 'react';


export interface IDialogContent extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const DialogContent: React.FC<IDialogContent> = (props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      {children}
    </div>
  )
};

export default DialogContent;
