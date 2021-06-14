import { render, screen } from '@testing-library/react';

import { MainSection } from '../MainSection';
import dataItem from '../../hooks/tests/fixtures/forecastData.json';

test('MainSection renders all the needed information', () => {
  render(<MainSection forecastData={dataItem} location='Munich'/>);
  expect(screen.getByText('Clear')).toBeInTheDocument();
  expect(screen.getByText('Munich')).toBeInTheDocument();
  expect(screen.getByText('Thursday')).toBeInTheDocument();
  expect(screen.getByText('16. February')).toBeInTheDocument();
  expect(screen.getByText('14°')).toBeInTheDocument();
  expect(screen.getByText('14° / 8°')).toBeInTheDocument();
});
