import React, { useEffect } from 'react';

export function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
  useEffect(
    () => {
      const listener = (event: MouseEvent) => {
        if (!ref?.current || (ref.current! as any).contains(event.target)) {
          return;
        }
        handler();
      };
      document.addEventListener('click', listener);
      return () => {
        document.removeEventListener('click', listener);
      };
    },
    [ref, handler]
  );
}
