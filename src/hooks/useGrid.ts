import { useEffect, useState } from 'react';
import { Breakpoints, TBreakpoint } from '../components/Grid/types';
import { useTheme } from '../components/Theme';
import { ITheme } from '../components/Theme/types';


function getBreakpoint(screenWidth: number, theme: ITheme): TBreakpoint {
  let breakpoint: TBreakpoint = Breakpoints.xs;
  if (screenWidth >= theme.grid.breakpoints.values[Breakpoints.sm]) {
    breakpoint = Breakpoints.sm;
  }
  if (screenWidth >= theme.grid.breakpoints.values[Breakpoints.md]) {
    breakpoint = Breakpoints.md;
  }
  if (screenWidth >= theme.grid.breakpoints.values[Breakpoints.lg]) {
    breakpoint = Breakpoints.lg;
  }
  if (screenWidth >= theme.grid.breakpoints.values[Breakpoints.xl]) {
    breakpoint = Breakpoints.xl;
  }
  return breakpoint;
}

export function useGrid () {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [breakpoint, setBreakpoint] = useState<TBreakpoint>(Breakpoints.xs);
  const { theme } = useTheme();
  const onResize = () => {
    setScreenWidth(window.innerWidth);
    setBreakpoint(getBreakpoint(window.innerWidth, theme));
  };
  useEffect(onResize, []);
  useEffect(
    () => {
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    },
    []
  );
  return {
    screenWidth,
    breakpoint,
  };
}
