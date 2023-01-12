import React from 'react';
import classNames from 'classnames';
import Text, { TTextVariant } from '../Text';
import { CloseIconRound } from '../Icons';
import useStyles from './styles';


type TTagSize = 'small' | 'medium' | 'large';

export interface ITag extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: 'primary' | 'secondary';
  size?: TTagSize;
  shape?: 'square' | 'round';
  selected?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  testId?: string;
  className?: string;
  onSelect?: () => void;
  onRemove?: () => void;
}

const Tag: React.FC<ITag> = (props) => {
  const {
    size = 'large',
    shape = 'round',
    iconLeft,
    iconRight,
    disabled = false,
    selected = false,
    children,
    testId,
    className,
    onSelect,
    onRemove,
    ...rest
  } = props;
  const classes = useStyles(props);
  const handleOnSelect = () => onSelect?.();
  const handleOnRemove = (event: React.BaseSyntheticEvent) => {
    event.stopPropagation();
    onRemove?.();
  };
  return (
    <button
      data-testid={testId}
      type="button"
      className={classNames(
        className,
        classes[size],
        classes.tag, {
          [classes.square]: shape == 'square',
          [classes.round]: shape == 'round',
          [classes.default]: !selected && !disabled,
          [classes.selected]: selected,
          [classes.disabled]: disabled,
        })
      }
      onClick={handleOnSelect}
      {...rest}
    >
      {iconLeft}
      <Text
        variant={getVariant(size)}
        className={classes.text}
      >
        {children}
      </Text>
      {iconRight}
      {onRemove && (
        <CloseIconRound
          className={classNames(classes.icon, classes[`${size}Icon`])}
          onClick={handleOnRemove}
        />
      )}
    </button>
  );
}

Tag.defaultProps = {
  size: 'large',
  shape: 'round',
  color: 'primary',
  selected: false,
  disabled: false,
}

export default Tag;

function getVariant (size: TTagSize): TTextVariant {
  switch (size) {
    case 'small':
      return 'components3';
    case 'medium':
      return 'components2';
    case 'large':
      return 'components1';
    default:
      return 'components1';
  }
}
