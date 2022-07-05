import React from 'react';
import useStyles from './styles';

interface IGlobalStyles {
  children: React.ReactNode,
}

export const GlobalStyles = (props: IGlobalStyles) => {
  const { children } = props;
  useStyles();

  return (
    <>
      { children }
    </>
  );
}
