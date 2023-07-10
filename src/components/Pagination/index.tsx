import React from 'react';
import Text from '../Text';
import { DOTS, usePagination } from './usePagination';
import { PointArrowIcon, MoreIcon } from '../Icons';
import classNames from 'classnames';
import { useDir } from '../Theme';
import useStyles from './styles';
import { KEYS } from '../../hooks/useKeyPress';

export interface IPagination {
  className?: string;
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  pageSize?: number;
  color?: 'primary' | 'secondary';
  dir?: string;
  testId?: string;
}

const Pagination: React.FC<IPagination> = (props) => {
  const {
    currentPage,
    onChange,
    className,
    dir = useDir(props.dir),
    testId,
  } = props;
  const classes = useStyles()({ ...props, dir });

  const paginationRange = usePagination(props);

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onChange(currentPage + 1);
  };

  const onPrevious = () => {
    onChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <div
      className={classNames(classes.paginationContainer, className)}
      data-testid={testId}
    >
      <div
        role="button"
        tabIndex={0}
        className={classNames(classes.arrow, {
          [classes.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
        onKeyDown={(e) =>
          e.key === KEYS.enter && currentPage !== 1 && onPrevious()
        }
      >
        <PointArrowIcon variant="left" />
      </div>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <MoreIcon key={DOTS + Math.random()} variant="horizontal" />;
        }

        return (
          <div
            role="button"
            tabIndex={0}
            key={pageNumber}
            className={classNames(classes.paginationItem, {
              [classes.selected]: pageNumber === currentPage,
            })}
            onClick={() => onChange(+pageNumber)}
            onKeyDown={(e) =>
              e.key === KEYS.enter && onChange && onChange(+pageNumber)
            }
          >
            <Text variant="components2">{pageNumber}</Text>
          </div>
        );
      })}
      <div
        role="button"
        tabIndex={0}
        className={classNames(classes.arrow, {
          [classes.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
        onKeyDown={(e) =>
          e.key === KEYS.enter && currentPage !== lastPage && onNext()
        }
      >
        <PointArrowIcon variant="right" />
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  color: 'primary',
  siblingCount: 1,
  pageSize: 1,
};

export default Pagination;
