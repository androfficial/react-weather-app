import { useEffect } from 'react';

import { Header, Preloader, Search } from './components';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { Home } from './pages';
import { selectCurrentWeatherData } from './store/selectors';
import {
  fetchCurrentWeather,
  toggleLocation,
} from './store/slices/currentWeather';

const App = () => {
  const dispatch = useCustomDispatch();
  const { isLoading, location, response } = useCustomSelector(
    selectCurrentWeatherData
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch(
        toggleLocation({
          access: false,
          message:
            'Геолокация не поддерживается вашим браузером, укажите свой город',
        })
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        dispatch(
          fetchCurrentWeather({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        );
      },
      (error: GeolocationPositionError) => {
        if (error.PERMISSION_DENIED) {
          dispatch(
            toggleLocation({
              access: false,
              message: 'Пожалуйста, введите свой город',
            })
          );
        }
      },
      {
        enableHighAccuracy: true,
      }
    );
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
