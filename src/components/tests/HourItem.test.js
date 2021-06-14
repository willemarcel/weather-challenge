import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HourItem } from '../HourItem';
import dataItem from '../../hooks/tests/fixtures/forecastData.json';

describe('HourItem', () => {
  const mockFn = jest.fn();
  it('with isActive = false', () => {
    const { container } = render(
      <HourItem forecastData={dataItem} isActive={false} setActive={() => mockFn()} />
    );
    expect(container.firstChild.className).toContain('hover:bg-indigo-80 cursor-pointer');
    expect(container.firstChild.className).not.toContain('bg-indigo-70');
    expect(screen.getByText('12:00')).toBeInTheDocument();
    expect(screen.getByText('14°')).toBeInTheDocument();
    userEvent.click(screen.getByText('12:00'));
    expect(mockFn).toHaveBeenCalled();
  });
  it('with isActive = true', () => {
    const { container } = render(
      <HourItem forecastData={dataItem} isActive={true} setActive={() => mockFn()} />
    );
    expect(container.firstChild.className).not.toContain('hover:bg-indigo-80 cursor-pointer');
    expect(container.firstChild.className).toContain('bg-indigo-70');
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
    expect(screen.getByText('14°')).toBeInTheDocument();
  });
});
