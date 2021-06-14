import { WeatherConditionImg } from './WeatherConditionImg';
import { Text, Title } from './Typography';
import { useForecastInfo } from '../hooks/UseForecastInfo';
import { HorizontalSpace } from './Space';

export const MainSection = ({ forecastData, location }) => {
  const { condition, maxTemperature, minTemperature, temperature, date } = useForecastInfo(forecastData);

  return (
    <section className='grid grid-flow-col auto-cols-max place-content-center'>
      <HorizontalSpace>
        <WeatherConditionImg condition={condition} size='large'/>
      </HorizontalSpace>
      <HorizontalSpace>
        <div>
          <Text>{ condition }</Text>
          <div className='inline float-right'>
            <Text>{ maxTemperature } / { minTemperature }</Text>
          </div>
        </div>
        <div className='p-4'>
          <Title level={1}>{ temperature }</Title>
        </div>
      </HorizontalSpace>
      <HorizontalSpace>
        <Text>{ location }</Text>
        <div className='pt-9'>
          <Title level={2}>{ date && date.weekday }</Title>
        </div>
        <div className='pt-4'>
          <Title level={2}>{ date && date.day }</Title>
        </div>
      </HorizontalSpace>
    </section>
  );
};
