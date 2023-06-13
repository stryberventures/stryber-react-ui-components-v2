import React from 'react';
import classNames from 'classnames';
import Text, { TTextVariant } from '../Text';
import { CloseCircleIcon } from '../Icons';
import { useDir } from '../Theme';
import useStyles from './styles';

type TTagSize = 'small' | 'medium' | 'large';
type TTagShape = 'square' | 'round';
type TTagColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'neutralGray';

export const defaultTagProps = {
  size: 'large' as TTagSize,
  shape: 'round' as TTagShape,
  color: 'primary' as TTagColor,
  selected: false,
  disabled: false,
};

export interface ITag extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: TTagColor;
  size?: TTagSize;
  shape?: TTagShape;
  selected?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode | ((p: ITag) => React.ReactNode);
  iconRight?: React.ReactNode | ((p: ITag) => React.ReactNode);
  testId?: string;
  className?: string;
  onSelect?: () => void;
  onRemove?: () => void;
}

const Tag: React.FC<ITag> = (props) => {
  const {
    size = defaultTagProps.size,
    shape = defaultTagProps.shape,
    disabled = defaultTagProps.disabled,
    selected = defaultTagProps.selected,
    iconLeft: pIconLeft,
    iconRight: pIconRight,
    children,
    testId,
    className,
    dir = useDir(props.dir),
    onSelect,
    onRemove,
    ...rest
  } = props;
  const classes = useStyles()({
    ...props,
    dir,
  });
  const iconLeft =
    typeof pIconLeft === 'function' ? pIconLeft({ ...props, dir }) : pIconLeft;
  const iconRight =
    typeof pIconRight === 'function'
      ? pIconRight({ ...props, dir })
      : pIconRight;
  const handleOnSelect = () => onSelect?.();
  const handleOnRemove = (event: React.BaseSyntheticEvent) => {
    event.stopPropagation();
    onRemove?.();
  };
  return (
    <button
      data-testid={testId}
      type="button"
      className={classNames(className, classes[size], classes.tag, {
        [classes.square]: shape == 'square',
        [classes.round]: shape == 'round',
        [classes.default]: !selected && !disabled,
        [classes.selected]: selected,
        [classes.disabled]: disabled,
      })}
      onClick={handleOnSelect}
      {...rest}
    >
      {iconLeft}
      <Text variant={getVariant(size)} className={classes.text}>
        {children}
      </Text>
      {iconRight}
      {onRemove && (
        <CloseCircleIcon
          data-testid="closeIconRound"
          className={classNames(classes.icon, classes[`${size}Icon`])}
          onClick={handleOnRemove}
        />
      )}
    </button>
  );
};

Tag.defaultProps = defaultTagProps;

export default Tag;

function getVariant(size: TTagSize): TTextVariant {
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
