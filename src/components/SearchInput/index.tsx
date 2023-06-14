import React from 'react';
import classNames from 'classnames';
import Input, { IInput } from '../Input';
import { SearchIcon } from '../Icons';
import { toRem, useDir } from '../Theme';
import useStyles from './styles';

export interface ISearchInput extends Omit<IInput, 'size'> {
  size?: 'medium' | 'large';
}

const SearchInput: React.FC<ISearchInput> = (props) => {
  const { className, size, dir = useDir(props.dir), ...rest } = props;
  const classes = useStyles()(props);
  const renderLeftIcon = () => (
    <SearchIcon
      className={classes.searchIcon}
      style={{ [dir === 'rtl' ? 'marginLeft' : 'marginRight']: toRem(8) }}
    />
  );
  return (
    <Input
      className={classNames(classes.searchInput, className, {
        [classes.large]: size === 'large',
      })}
      variant="labelOutside"
      leftIcon={renderLeftIcon}
      clearButton
      {...rest}
      dir={dir}
      label=""
    />
  );
};
SearchInput.defaultProps = {
  color: 'primary',
};

export default SearchInput;
