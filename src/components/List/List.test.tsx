import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import List from './index'
import { IListItem } from './ListItem';

const listItemTestID = 'test-list-item';
const leftContentTestID = 'test-left-content';
const rightContentTestID = 'test-right-content';
const onClick = jest.fn();

const listItems: IListItem[] = [
  {
    title: 'One-line Item',
    subtitle: 'Secondary Text',
    leftContent: <div data-testid={leftContentTestID} />,
    rightContent: <div data-testid={rightContentTestID}>01</div>,
    testID: listItemTestID,
    onClick,
    fixedSize: 'medium'
  },
];
const firstItem = listItems[0];

it('should be rendered with title and subtitle', () => {
  const { getByText } = render(<List listItems={listItems} />);
  getByText(firstItem.title);
  getByText(firstItem.subtitle!);
});

it('should be rendered with leftContent and rightContent', () => {
  const { getByTestId } = render(<List listItems={listItems} />);
  getByTestId(leftContentTestID);
  getByTestId(rightContentTestID);
});

it('fires onClick', () => {
  const { getByTestId } = render(<List listItems={listItems} />);
  fireEvent.click(getByTestId(listItemTestID));
  expect(onClick).toHaveBeenCalled();
});
