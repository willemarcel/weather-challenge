import { render } from '@testing-library/react';

import { WeatherConditionImg } from '../WeatherConditionImg';

describe('WeatherConditionImg', () => {
  it('when condition is Clear and using default size', () => {
    const { container } = render(<WeatherConditionImg condition='Clear' />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('.text-yellow')).toBeInTheDocument();
    expect(container.querySelector('.w-20')).toBeInTheDocument();
  });
  it('when condition is Clear and using small size', () => {
    const { container } = render(<WeatherConditionImg condition='Clear' size='small' />);
    expect(container.querySelector('.w-20')).toBeInTheDocument();
  });
  it('when condition is Clear and using large size', () => {
    const { container } = render(<WeatherConditionImg condition='Clear' size='large' />);
    expect(container.querySelector('.w-52')).toBeInTheDocument();
  });
  it('when condition is not Clear and using small size', () => {
    const { container } = render(<WeatherConditionImg condition='Rain' size='small' />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('.text-yellow')).toBeInTheDocument();
    expect(container.querySelector('.w-20')).toBeInTheDocument();
  });
  it('when condition is not Clear and using large size', () => {
    const { container } = render(<WeatherConditionImg condition='Rain' size='big' />);
    expect(container.querySelector('.w-52')).toBeInTheDocument();
  });
});
