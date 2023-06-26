import React from 'react';
import Text from '../../Text';
import classNames from 'classnames';
import useStyles from './styles';

export interface IListItemText {
  label?: string;
  primary: string;
  secondary?: string;
  className?: string;
  disabled?: boolean;
}

const ListItemText: React.FC<IListItemText> = (props) => {
  const classes = useStyles()(props);
  const { label, primary, secondary, className } = props;
  return (
    <div className={className}>
      {label && (
        <Text
          variant="components2"
          weight="regular"
          className={classNames(classes.label, classes.listItemText)}
        >
          {label}
        </Text>
      )}
      <Text
        variant="components1"
        weight="medium"
        className={classNames(classes.primary, classes.listItemText)}
      >
        {primary}
      </Text>
      {secondary && (
        <Text
          variant="components2"
          weight="regular"
          className={classNames(classes.secondary, classes.listItemText)}
        >
          {secondary}
        </Text>
      )}
    </div>
  );
};

export default ListItemText;
