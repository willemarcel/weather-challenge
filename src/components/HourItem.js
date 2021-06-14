import { WeatherConditionImg } from './WeatherConditionImg';
import { Text, Title } from './Typography';
import { useForecastInfo } from '../hooks/UseForecastInfo';
import { VerticalSpace } from './Space';

export const HourItem = ({ forecastData, isActive, setActive }) => {
  const { condition, temperature, date } = useForecastInfo(forecastData);

  return(
    <div
      className={`inline-block px-8 py-3 text-center rounded ${isActive ? 'bg-indigo-70' : 'hover:bg-indigo-80 cursor-pointer'}`}
      onClick={() => setActive()}
    >
      <VerticalSpace>
        <Text>{date && date.time}</Text>
      </VerticalSpace>
      <VerticalSpace>
        <WeatherConditionImg size='small' condition={condition} />
      </VerticalSpace>
      <VerticalSpace>
        <Title level={3}>{temperature}</Title>
      </VerticalSpace>
    </div>
  );
};
