import { ForwardedRef, useEffect, useImperativeHandle, useState } from 'react';
import { IDropdown, IDropdownRef } from './index';

export const useDropdown = (props: IDropdown, ref: ForwardedRef<IDropdownRef>) => {
  const { disabled, onToggle } = props;
  const [open, setOpen] = useState(false);
  
  useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true);
    },
    close: () => {
      setOpen(false);
    }
  }));

  const onInputClick = () => {
    if (disabled) {
      return;
    }
    setOpen(!open);
  };
  
  const onOverlayClick = () => {
    setOpen(false);
  }
  
  
  useEffect(() => {
    onToggle && onToggle(open);
  }, [open]);
  
  return {
    open,
    onInputClick,
    onOverlayClick,
  }
}
