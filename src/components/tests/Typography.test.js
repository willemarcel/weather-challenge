import { render, screen } from '@testing-library/react';

import { Text, Title } from '../Typography';

test('Text component is correctly formated', () => {
  render(<Text>Hello World</Text>);
  expect(screen.getByText('Hello World').className).toBe('text-indigo-30 text-3xl');
});

describe('Title component', () => {
  it('with level 1 is corrected formatted', () => {
    render(<Title level={1}>16º</Title>);
    const title = screen.getByText('16º');
    expect(title.className).toContain('text-white');
    expect(title.className).toContain('font-bold');
    expect(title.className).toContain('text-10xl');
  });
  it('with level 2 is corrected formatted', () => {
    render(<Title level={2}>Monday</Title>);
    const title = screen.getByText('Monday');
    expect(title.className).toContain('text-white');
    expect(title.className).toContain('font-bold');
    expect(title.className).toContain('text-6xl');
  });
  it('with level 3 is corrected formatted', () => {
    render(<Title level={3}>Tuesday</Title>);
    const title = screen.getByText('Tuesday');
    expect(title.className).toContain('text-white');
    expect(title.className).toContain('font-bold');
    expect(title.className).toContain('text-5xl');
  });
});
