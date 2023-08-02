import React from 'react';

export const FullViewportDecorator = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        marginLeft: '-1rem',
        marginTop: '-1rem',
      }}
    >
      {children}
    </div>
  );
};
