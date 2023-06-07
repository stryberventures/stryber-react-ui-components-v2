import React from 'react';
import Text from '../../Text';
import classNames from 'classnames';
import useStyles from './styles';

interface IListItemText {
  label?: string;
  primary: string;
  secondary?: string;
}

const ListItemText: React.FC<IListItemText> = (props) => {
  const classes = useStyles()();
  const { label, primary, secondary } = props;
  return (
    <div>
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
