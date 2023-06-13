import { ForwardedRef, useImperativeHandle, useState } from 'react';
import { IDropdown, IDropdownRef } from './index';

export const useDropdown = (
  props: IDropdown,
  ref: ForwardedRef<IDropdownRef>
) => {
  const { disabled, onToggle, onOutsideClick } = props;
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      handleOpen(true);
    },
    close: () => {
      handleOpen(false);
    },
  }));

  const handleOpen = (open: boolean) => {
    setOpen(open);
    onToggle && onToggle(open);
  };

  const onInputClick = () => {
    if (disabled) {
      return;
    }
    handleOpen(!open);
  };

  const onOverlayClick = () => {
    handleOpen(false);
    onOutsideClick && onOutsideClick();
  };

  return {
    open,
    onInputClick,
    onOverlayClick,
  };
};
