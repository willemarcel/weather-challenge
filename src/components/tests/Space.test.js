import { render, screen } from '@testing-library/react';

import { HorizontalSpace, VerticalSpace } from '../Space';

test('HorizontalSpace returns a div with px-14', () => {
  render(<HorizontalSpace>Test</HorizontalSpace>);
  expect(screen.getByText('Test').className).toBe('px-14');
});

test('VerticalSpace returns a div with py-3', () => {
  render(<VerticalSpace>Test</VerticalSpace>);
  expect(screen.getByText('Test').className).toBe('py-3');
});
