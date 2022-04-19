import React from 'react';
import { Button } from '../Button';

// Dummy component to demonstrate parent component which contains a child from the components library

export interface IAnotherButton {
  text: string
}

export const AnotherButton = (props: IAnotherButton) => {
  const { text } = props;
  
  return (
    <div>
      <div>{text}</div>
      <Button label="Button"/>
    </div>
  );
}

export default {
  AnotherButton,
}
