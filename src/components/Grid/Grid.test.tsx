import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Grid from './';

it('should be rendered', () => {
  const text = 'Grid item';
  render(
    <Grid container>
      <Grid
        item
        xs={12}
      >
        {text}
      </Grid>
    </Grid>
  );
  expect(screen.queryByText(text)).toBeInTheDocument();
});

it('should render section', async () => {
  const text = 'Grid item';
  const tag = 'section';
  render(
    <Grid
      item
      xs={12}
      component={tag}
    >
      {text}
    </Grid>
  );
  const gridItem = await screen.findByText(text);
  expect(gridItem.nodeName.toLowerCase()).toBe(tag);
});
