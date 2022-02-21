import { AppDispatch } from '../store/index';
import {
  fetchCurrentWeather,
  setLocation,
} from '../store/slices/currentWeather';

export const locationPermission = (dispatch: AppDispatch): void => {
  if (!navigator.geolocation) {
    dispatch(
      setLocation({
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
          setLocation({
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
};
