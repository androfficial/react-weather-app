import { useEffect } from 'react';

import { Header, Preloader, Search } from './components';
import { locationPermission } from './helpers/locationPermission';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { Home } from './pages';
import { selectCurrentWeatherData } from './store/selectors';

const App = () => {
  const dispatch = useCustomDispatch();
  const { isLoading, location, response } = useCustomSelector(
    selectCurrentWeatherData
  );

  useEffect(() => {
    locationPermission(dispatch);
  }, [dispatch]);

  return (
    <main className='page'>
      <div className='container'>
        {isLoading && <Preloader />}
        {!isLoading && location.access && (
          <>
            <Header />
            <Home />
          </>
        )}
        {!isLoading && !location.access && (
          <Search message={location.message} response={response} />
        )}
      </div>
    </main>
  );
};

export default App;
