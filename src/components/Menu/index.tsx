import React, { useState } from 'react';
import classNames from 'classnames';
import useStyles from './styles';
import List from '../List';
import Elevation from '../Elevation';
import Input from '../Input';
import { SearchIcon } from '../Icons';
import { toRem, useDir } from '../Theme';
import { IListItem } from '../List/ListItem';



export interface IMenu {
  menuItems: IListItem[]
  size?: 'small' | 'medium' | 'large',
  className?: string,
  hasSearch?: boolean,
  dir?: string,
}

const Menu: React.FC<IMenu> = (props) => {
  const {
    size = 'medium',
    className,
    hasSearch,
    menuItems,
    dir = useDir(props.dir),
  } = props;
  const classes = useStyles()({
    ...props,
    dir
  });

  const [seachText, setSearchText] = useState('')


  return (
    <div className={classNames(classes[size], className)} data-testid='gaia-menu-test'>
      <Elevation className={classNames(classes.menuContainer)}>
        {props.children
          ? props.children
          : <>{ hasSearch &&
            <div className={classNames(classes.inputContainer)} data-testid='gaia-menu-search'>
              <Input
                className={classNames(classes.searchInput)}
                variant="labelOutside"
                leftIcon={<SearchIcon className={classes.searchIcon} style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(8) }} />}
                clearButton
                onChange={(e => setSearchText(e.target.value))}
                label=""
                placeholder='Search'
                dir={dir}
              />
            </div>}
          <div className={classNames(classes.listContainer)}>
            <List listItems={seachText ? menuItems.filter( e => e.title?.toLowerCase()?.includes(seachText.toLocaleLowerCase())) : menuItems} />
          </div>
          </>
        }
      </Elevation>
    </div>

  )
}


export default Menu;

Menu.defaultProps = {
  size: 'medium',
}
