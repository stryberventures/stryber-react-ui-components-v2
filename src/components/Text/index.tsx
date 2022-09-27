import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';


export interface IText extends React.HTMLAttributes<HTMLDivElement>{
  classname?: string,
  children: string,
  align?: 'left' | 'center' | 'right';
  variant?:
  | 'body'
  | 'description'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subline'
  | 'quote'
  | 'caption'
  | 'smallText'
  | 'footnote'
  | 'buttonLabel'
  | 'label'
  | 'labelHighlight';
}

const Text: React.FC<IText> = (props) => {
  const {
    classname,
    children,
    variant = 'body',
    align = 'left',
    ...rest
  } = props;
  const classes = useStyles(props);
  return (
    <div
      data-testid={`test-text-${variant}`}
      className={classNames([
        classes.text,
        classes[variant],
        classes[align],
        classname
      ])}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Text;
