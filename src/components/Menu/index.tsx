import React from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import List, { ListItem, ListItemText } from '../List';
import MenuSearch from './MenuSearch';
import Elevation from '../Elevation';
import { useDir } from '../Theme';

export interface IMenu {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  dir?: string;
  children?: React.ReactNode;
}

const Menu: React.FC<IMenu> = (props) => {
  const {
    size = 'medium',
    className,
    children,
    dir = useDir(props.dir),
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });

  return (
    <div
      className={classNames(classes[size], className)}
      data-testid="gaia-menu-test"
    >
      <Elevation className={classNames(classes.menuContainer)}>
        <List>{children}</List>
      </Elevation>
    </div>
  );
};

Menu.defaultProps = {
  size: 'medium',
};

export default Menu;

export { ListItem as MenuItem, ListItemText as MenuItemText, MenuSearch };
