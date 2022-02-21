import {
  getCurrentDay,
  getCurrentHour,
  getCurrentMonthNumber,
  windSpeedToKm,
} from '../../helpers/dataFormat';
import { IHourly, IOneCall } from '../../types/weather';

interface IHourlyProps {
  hourly: IOneCall['hourly'];
  timezone: number;
}

export const Hourly = ({ hourly, timezone }: IHourlyProps) => {
  return (
    <div className='home__hourly-weather hourly-weather'>
      <h2 className='hourly-weather__title'>Ежечасно</h2>
      <div className='hourly__items'>
        {hourly.slice(1, 26).map((obj: IHourly['hourly'], i) => (
          <div key={i} className='hourly__item item-hourly'>
            <h5 className='item-hourly__date'>
              {`${getCurrentDay(obj.dt, timezone)}.${getCurrentMonthNumber(
                obj.dt
              )}`}
            </h5>
            <h4 className='item-hourly__time'>
              {' '}
              {`${getCurrentHour(obj.dt, timezone)}:00`}
            </h4>
            <div className='item-hourly__image-wrapper'>
              <img
                src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
                alt='weather icon'
              />
            </div>
            <span className='item-hourly__wind'>{`${Math.round(
              windSpeedToKm(obj.wind_speed)
            )} км/ч`}</span>
            <span className='item-hourly__degrees'>
              {`${Math.round(obj.temp)}°`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
