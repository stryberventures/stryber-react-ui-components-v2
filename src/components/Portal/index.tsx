import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export type TPortalContainer = HTMLElement | Element | DocumentFragment | null;

interface IPortalProps {
  children: React.ReactElement,
  container?: TPortalContainer,
}

const Portal = (props: IPortalProps) => {
  const { children, container } = props;
  const [mountNode, setMountNode] = useState<TPortalContainer>();
  useEffect(
    () => {
      setMountNode(container || document.body);
      document.body.setAttribute('style', 'overflow: hidden');
      return () => {
        document.body.setAttribute('style', 'overflow: auto');
      };
    },
    [container]
  );
  return (
    <>
      {mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode}
    </>
  );
};

export default Portal;
