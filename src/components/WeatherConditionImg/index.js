import { ReactComponent as Sun } from './sun.svg';
import { ReactComponent as Cloud } from './cloud.svg';

/**
 * Renders a SVG representing the weather condition.
 * As we only have two icons, we are using the Cloud icon to all conditions that
 * are not Clear weather.
 * Available size options are large and small (default).
*/
export const WeatherConditionImg = ({ condition, size='small' }) => {
  const sizeClass = size === 'small' ? 'w-16' : 'w-24';

  if (condition === 'Clear') {
    return <Sun className={`text-yellow ${sizeClass}`} />
  } else {
    return <Cloud className={`text-yellow ${sizeClass}`} />
  }
}
