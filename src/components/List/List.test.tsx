import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List, { ListItem, ListItemText } from './index';

const listItemTestID = 'test-list-item';
const leftContentTestID = 'test-left-content';
const rightContentTestID = 'test-right-content';
const onClick = jest.fn();

const firstItem = {
  title: 'One-line Item',
  subtitle: 'Secondary Text',
  leftContent: <div data-testid={leftContentTestID} />,
  rightContent: <div data-testid={rightContentTestID}>01</div>,
  testID: listItemTestID,
  onClick,
  size: 'medium',
};

const ComponentWithList = () => (
  <List>
    <ListItem
      rightContent={firstItem.rightContent}
      leftContent={firstItem.leftContent}
      onClick={firstItem.onClick}
    >
      <ListItemText primary={firstItem.title} secondary={firstItem.subtitle} />
    </ListItem>
  </List>
);

it('should be rendered with title and subtitle', () => {
  const { getByText } = render(<ComponentWithList />);
  getByText(firstItem.title);
  getByText(firstItem.subtitle!);
});

it('should be rendered with leftContent and rightContent', () => {
  const { getByTestId } = render(<ComponentWithList />);
  getByTestId(leftContentTestID);
  getByTestId(rightContentTestID);
});

it('fires onClick', () => {
  const { getByTestId } = render(<ComponentWithList />);
  fireEvent.click(getByTestId(listItemTestID));
  expect(onClick).toHaveBeenCalled();
});
