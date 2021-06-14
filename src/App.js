import React, { useState } from 'react';

import { MainSection } from './components/MainSection';
import { HourlyForecast } from './components/HourlyForecast';
import { useFetchWeather } from './hooks/UseFetchWeather';

function App() {
  const location = 'München,DE';
  const locationEn = 'Munich';
  const [error, loading, data] = useFetchWeather(location);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className='w-full h-screen bg-indigo font-sans text-white'>
      {loading && <span>Loading...</span>}
      {error && <span>An error ocurred... try again.</span>}
      {(!error && !loading) &&
        <>
          <div className="mx-auto container pt-14 pb-24">
            <MainSection forecastData={data.list[selectedItem]} location={locationEn} />
          </div>
          <HourlyForecast forecast={data.list} selectedItem={selectedItem} setActive={setSelectedItem} />
        </>
      }
    </div>
  );
}

export default App;
