import React from 'react';
import classNames from 'classnames';
import { ProfileIcon } from '../Icons';
import useStyles from './styles';
import { useDir } from '../Theme';

export interface IAvatar {
  size?: 'small' | 'medium' | 'large';
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  status?: 'online' | 'offline';
  statusClassName?: string;
  shape?: 'circle' | 'square';
  dir?: string;
}

const Avatar: React.FC<IAvatar> = (props) => {
  const {
    src,
    alt,
    status,
    size,
    dir = useDir(props.dir),
    className,
    imgClassName,
    statusClassName,
  } = props;

  const iconSizeMap = {
    small: 18,
    medium: 23,
    large: 27,
  };

  const classes = useStyles()({ ...props, dir });
  return (
    <div className={classes.avatarWrapper}>
      <div
        className={classNames(
          classes.avatarContainer,
          classes[`${size!}Avatar`],
          className
        )}
      >
        {src ? (
          <img
            className={classNames(classes.image, imgClassName)}
            src={src}
            alt={alt}
          />
        ) : (
          <ProfileIcon width={iconSizeMap[size!]} />
        )}
      </div>
      {!!status && (
        <div
          className={classNames(
            classes.status,
            classes[`${size!}Status`],
            statusClassName
          )}
          data-testid="gaia-avatar-status"
        />
      )}
    </div>
  );
};

Avatar.defaultProps = {
  size: 'medium',
  shape: 'circle',
};

export default Avatar;
