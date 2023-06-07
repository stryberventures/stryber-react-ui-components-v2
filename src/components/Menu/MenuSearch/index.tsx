import React from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../Icons';
import Input from '../../Input';
import { toRem, useDir } from '../../Theme';
import useStyles from './styles';

interface IMenuSearch {
  dir?: string;
  onChange?: (e: React.BaseSyntheticEvent) => void;
  placeholder?: string;
  value?: string;
}

const MenuSearch: React.FC<IMenuSearch> = (props) => {
  const {
    dir = useDir(props.dir),
    onChange,
    placeholder = 'Search',
    value,
  } = props;
  const classes = useStyles()();
  return (
    <div
      className={classNames(classes.inputContainer)}
      data-testid="gaia-menu-search"
    >
      <Input
        className={classNames(classes.searchInput)}
        variant="labelOutside"
        leftIcon={
          <SearchIcon
            className={classes.searchIcon}
            style={{
              [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(8),
            }}
          />
        }
        clearButton
        value={value}
        onChange={onChange}
        label=""
        placeholder={placeholder}
        dir={dir}
      />
    </div>
  );
};

export default MenuSearch;
