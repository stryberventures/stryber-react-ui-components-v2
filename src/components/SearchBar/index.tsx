import React from 'react';
import Input, { IInput } from '../Input';
import { SearchIcon } from '../Icons';
import useStyles from './styles';

export interface ISearchBar extends IInput {
  color?: 'primary' | 'secondary';
}

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles()();
  return (
    <Input
      className={className}
      variant="labelOutside"
      leftIcon={<SearchIcon className={classes.searchIcon} />}
      {...rest}
    />
  );
}
SearchBar.defaultProps = {
  color: 'primary',
}

export default SearchBar;
