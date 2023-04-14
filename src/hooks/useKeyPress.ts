import { useEffect } from 'react';

export enum KEYS {
  esc = 'Escape',
  enter = 'Enter',
  tab = 'Tab',
}

export function useKeyPress (targetKey: string, callback: (e: KeyboardEvent) => void) {
  const keyDownHandler = (e: KeyboardEvent) => {
    if(e.key == targetKey) callback(e);
  };
  useEffect(
    () => {
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    },
  );
}
