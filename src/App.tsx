import { useEffect } from 'react';

import { Header, Modal, Preloader, Search } from './components';
import { locationPermission } from './helpers/locationPermission';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { Home } from './pages';
import { selectCurrentWeatherData } from './store/selectors';

const App = () => {
  const dispatch = useCustomDispatch();
  const { isLoading, location } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    locationPermission(dispatch);
  }, [dispatch]);

  return (
    <>
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
            <Search message={location.message} />
          )}
        </div>
      </main>
      <Modal />
    </>
  );
};

export default App;
