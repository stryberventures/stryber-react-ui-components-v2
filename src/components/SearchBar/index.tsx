import React from 'react';
import classNames from 'classnames';
import Input, { IInput } from '../Input';
import { SearchIcon } from '../Icons';
import { toRem } from '../Theme/utils';
import useStyles from './styles';

export interface ISearchBar extends IInput {
  color?: 'primary' | 'secondary';
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles()(props);
  return (
    <Input
      className={classNames(classes.searchInput, className)}
      variant="labelOutside"
      leftIcon={<SearchIcon className={classes.searchIcon} style={{ marginRight: toRem(8) }} />}
      clearButton
      {...rest}
    />
  );
}
SearchBar.defaultProps = {
  color: 'primary',
}

export default SearchBar;
