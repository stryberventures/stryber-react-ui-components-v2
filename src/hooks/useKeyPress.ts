import { useEffect } from 'react';

export enum KEYS {
  esc = 'Escape',
  enter = 'Enter',
}

export function useKeyPress (targetKey: string, callback: () => void) {
  const keyDownHandler = (e: KeyboardEvent) => {
    if(e.key == targetKey) callback();
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
