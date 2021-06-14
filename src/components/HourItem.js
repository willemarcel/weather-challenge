import { WeatherConditionImg } from './WeatherConditionImg';
import { Text, Title } from './Typography';
import { useForecastInfo } from '../hooks/UseForecastInfo';

export const HourItem = ({ forecastData, isActive, setActive }) => {
  const { condition, temperature, date } = useForecastInfo(forecastData);

  return(
    <div
      className={`inline-block px-8 py-3 text-center rounded ${isActive ? 'bg-indigo-70' : 'hover:bg-indigo-80 cursor-pointer'}`}
      onClick={() => setActive()}
    >
      <div className='block py-3'>
        <Text>{date && date.time}</Text>
      </div>
      <div className='block py-3'>
        <WeatherConditionImg size='small' condition={condition} />
      </div>
      <div className='block py-3'>
        <Title level={3}>{temperature}</Title>
      </div>
    </div>
  );
};
