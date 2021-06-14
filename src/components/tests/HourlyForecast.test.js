import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HourlyForecast } from '../HourlyForecast';
import dataItem from '../../hooks/tests/fixtures/forecastData.json';

describe('HourlyForecast', () => {
  const mockFn = jest.fn();
  // creates an array with the dataItem fixture and another item one hour later
  const forecast = [dataItem, {...dataItem, dt: 1487246400 + 60*60}];
  it('renders all the items', () => {
    const { container } = render(<HourlyForecast forecast={forecast} />);
    expect(container.querySelectorAll('svg').length).toBe(2);
    expect(screen.getByText('12:00')).toBeInTheDocument();
    expect(screen.getByText('13:00')).toBeInTheDocument();
  });
  it('triggers the onClick function and pass the item key', () => {
    render(<HourlyForecast forecast={forecast} setActive={mockFn} />);
    userEvent.click(screen.getByText('13:00'));
    expect(mockFn).toHaveBeenLastCalledWith(1);
    userEvent.click(screen.getByText('12:00'));
    expect(mockFn).toHaveBeenLastCalledWith(0);
  });
  it('has the first item selected', () => {
    const { container } = render(<HourlyForecast forecast={forecast} selectedItem={0} />);
    expect(container.querySelectorAll('.bg-indigo-70').length).toBe(1);
  });
});
