import {
  getCurrentDay,
  getCurrentDayName,
  getCurrentMonthNumber,
} from '../../helpers/dataFormat';
import { IDaily, IOneCall } from '../../types/weather';

interface IDailyProps {
  daily: IOneCall['daily'];
  timezone: number;
}

export const Daily = ({ daily, timezone }: IDailyProps) => {
  return (
    <div className='home__daily-weather daily-weather'>
      <h2 className='daily-weather__title'>Ежедневно</h2>
      <div className='daily__items'>
        {daily.slice(1).map((obj: IDaily['daily'], i) => (
          <div key={i} className='daily__item item-daily'>
            <h5 className='item-daily__date'>{`${getCurrentDay(
              obj.dt,
              timezone
            )}.${getCurrentMonthNumber(obj.dt)}`}</h5>
            <h4 className='item-daily__day'>{getCurrentDayName(obj.dt)}</h4>
            <div className='item-daily__image-wrapper'>
              <img
                src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
                alt='weather icon'
              />
            </div>
            <span className='item-daily__degrees'>
              {`${Math.round(obj.temp.max)}°`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
