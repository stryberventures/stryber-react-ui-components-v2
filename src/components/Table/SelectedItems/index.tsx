import React, { ReactNode } from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import { ReactJSXElement } from '@storybook/theming/dist/ts3.9/_modules/@emotion-react-types-jsx-namespace';


interface ISelectedItems {
  children: string | React.ReactNode;
  className?: string;
}

const SelectedItems: React.FC<ISelectedItems> = (props) => {
  const { children, className } = props;
  const classes = useStyles()();
  return (
    <div className={classNames(classes.selectedItems, className)}>
      {children}
    </div>
  );
};

export default SelectedItems;
