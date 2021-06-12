import { WeatherConditionImg } from './components/WeatherConditionImg';

function App() {
  return (
    <div className='mx-auto w-full h-screen bg-indigo font-sans text-white'>
      <div>
        <WeatherConditionImg condition={'Clear'}/>
        Munich
      </div>
    </div>
  );
}

export default App;
