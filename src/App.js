import { MainSection } from './components/MainSection';
import { useFetchWeather } from './hooks/UseFetchWeather';

function App() {
  const location = 'München,DE';
  const locationEn = 'Munich'
  const [error, loading, data] = useFetchWeather(location);

  return (
    <div className='w-full h-screen bg-indigo font-sans text-white'>
      <div className="mx-auto container py-10">
        {loading && <span>Loading...</span>}
        {error && <span>An error ocurred... try again.</span>}
        {(!error && !loading) &&
          <MainSection forecastData={data.list[0]} location={locationEn} />
        }
      </div>
    </div>
  );
}

export default App;
