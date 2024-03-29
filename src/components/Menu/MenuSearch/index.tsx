import React from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../Icons';
import Input from '../../Input';
import { toRem, useDir } from '../../Theme';
import { useTheme } from '../../Theme';
import useStyles from './styles';

export interface IMenuSearch {
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
  const { theme } = useTheme();
  const classes = useStyles()(props);
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
            width={toRem(20)}
            height={toRem(20)}
            fill={theme.colors.text.secondary}
            className={classes.searchIcon}
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
