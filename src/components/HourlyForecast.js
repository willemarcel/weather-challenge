import { HourItem } from './HourItem';

export const HourlyForecast = ({ forecast, selectedItem, setActive }) => {
  return(
    <section className='flex flex-row gap-3 overflow-x-auto'>
      {forecast.map((item, n) =>
        <HourItem
          key={n}
          forecastData={item}
          isActive={n === selectedItem}
          setActive={() => setActive(n)}
        />
      )}
    </section>
  );
}
