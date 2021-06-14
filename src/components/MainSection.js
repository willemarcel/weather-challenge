import { WeatherConditionImg } from './WeatherConditionImg';
import { Text, Title } from './Typography';
import { useForecastInfo } from '../hooks/UseForecastInfo';

export const MainSection = ({ forecastData, location }) => {
  const { condition, maxTemperature, minTemperature, temperature, date } = useForecastInfo(forecastData);

  return (
    <section className='grid grid-flow-col auto-cols-max place-content-center'>
      <div className='px-4'>
        <WeatherConditionImg condition={condition} size='large'/>
      </div>
      <div className='px-16'>
        <div>
          <Text>{ condition }</Text>
          <div className='inline float-right'>
            <Text>{ maxTemperature } / { minTemperature }</Text>
          </div>
        </div>
        <div className='block pt-4 px-4'>
          <Title level={1}>{ temperature }</Title>
        </div>
      </div>
      <div className='px-16'>
        <Text>{ location }</Text>
        <div className='block pt-9'>
          <Title level={2}>{ date && date.weekday }</Title>
        </div>
        <div className='block pt-4'>
          <Title level={2}>{ date && date.day }</Title>
        </div>
      </div>
    </section>
  );
};
