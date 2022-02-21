import { AppDispatch } from '../store/index';
import {
  fetchCurrentWeather,
  toggleLocation,
} from '../store/slices/currentWeather';

export const locationPermission = (dispatch: AppDispatch): void => {
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
};
