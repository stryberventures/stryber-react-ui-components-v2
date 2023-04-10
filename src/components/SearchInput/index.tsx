import React from 'react';
import classNames from 'classnames';
import Input, { IInput } from '../Input';
import { SearchIcon } from '../Icons';
import { toRem } from '../Theme/utils';
import useStyles from './styles';

export interface ISearchInput extends Omit<IInput, 'size'> {
  size?: 'medium' | 'large';
}

const SearchInput: React.FC<ISearchInput> = (props) => {
  const { className, size, ...rest } = props;
  const classes = useStyles()(props);
  return (
    <Input
      className={classNames(classes.searchInput, className, {
        [classes.large]: size === 'large',
      })}
      variant="labelOutside"
      leftIcon={<SearchIcon className={classes.searchIcon} style={{ marginRight: toRem(8) }} />}
      clearButton
      {...rest}
      label=""
    />
  );
}
SearchInput.defaultProps = {
  color: 'primary',
}

export default SearchInput;
