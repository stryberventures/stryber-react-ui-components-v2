import React from 'react';
import { useTheme } from '../../Theme';
import Text from '../../Text';
import Select from '../../Select';
import useStyles from './styles';
import { PointArrowIcon } from '../../Icons'
import { ISelect } from '../../Select';
import classNames from 'classnames';
import { KEYS } from '../../../hooks/useKeyPress';

interface ITablePagination extends React.HTMLAttributes<HTMLDivElement> {
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  onRowsPerPageChange?: ISelect['onChange'];
  count: number;
  page: number;
  onPageChange: (event:  React.MouseEvent<any, MouseEvent>, page: number) => void;
  rowsPerPageLabel?: string;
  countLabel?: string;
}

const TablePagination: React.FC<ITablePagination> = (props) => {
  const { theme } = useTheme();
  const {
    rowsPerPageOptions = [10, 25, 50, 100],
    rowsPerPage,
    onRowsPerPageChange,
    count,
    page,
    className,
    rowsPerPageLabel = 'Row per page',
    countLabel = 'of',
    onPageChange,
    ...rest
  } = props;
  const classes = useStyles()();

  const firstPage = page === 0;
  const lastPage = page === Math.ceil(count / rowsPerPage) - 1;

  const handleBackButtonClick = (event: any) => {
    if (!firstPage) {
      onPageChange(event, page - 1);
    }
  };

  const handleNextButtonClick = (event: any) => {
    if (!lastPage) {
      onPageChange(event, page + 1);
    }
  };

  return (
    <div className={classNames(classes.paginationContainer, className)} {...rest}>
      <div>
        <Text variant="components1">
          {rowsPerPageLabel}
        </Text>
        <Select
          className={classes.paginationSelect}
          value={rowsPerPage}
          options={
            rowsPerPageOptions
              .map((option) =>
                ({ value: option, label: option.toString() }))
          }
          onChange={onRowsPerPageChange}
        />
      </div>
      <div className={classes.pagesContainer}>
        <Text variant="components1">
          {page * rowsPerPage || 1} – {Math.min(count, page * rowsPerPage + rowsPerPage)} {countLabel} {count}
        </Text>
        <PointArrowIcon
          variant="left"
          onClick={handleBackButtonClick}
          fill={firstPage ? theme.colors.text.disabled : undefined}
          className={classNames(classes.arrow, { [classes.disabledArrow]: firstPage })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key == KEYS.enter && handleBackButtonClick(e)}
        />
        <PointArrowIcon
          variant="right"
          onClick={handleNextButtonClick}
          fill={lastPage ? theme.colors.text.disabled : undefined} className={classes.arrow}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key == KEYS.enter && handleBackButtonClick(e)}
        />
      </div>
    </div>
  );
};

export default TablePagination;
