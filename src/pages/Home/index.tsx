import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector';
import Cloud from '../../assets/images/cloud.png';
import {
  getCityTime,
  getCurrentDay,
  getCurrentDayName,
  getCurrentHour,
  getCurrentMonthNumber,
  windSpeedToKm,
} from '../../helpers/dataFormat';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { IDaily, IHourly } from '../../types/weather';

export const Home = () => {
  const { weather, oneCallWeather } = useCustomSelector(
    selectCurrentWeatherData
  );

  return (
    <div className='home'>
      <div className='home__wrapper'>
        <div className='home__this-day this-day'>
          <div className='this-day__top'>
            <div className='this-day__wrapper'>
              <div className='this-day__temp'>
                {Math.round(weather.main.temp)}°
              </div>
              <div className='this-day__name'>Сегодня</div>
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
          <div className='this-day__bottom'>
            <div className='this-day__time'>
              Время: <span>{getCityTime(weather.timezone)}</span>
            </div>
            <div className='this-day__city'>
              Город: <span>{weather.name}</span>
            </div>
          </div>
        </div>
        <div className='home__this-day-info this-day-info'>
          <div className='this-day-info__items'>
            <div className='this-day-info__item item-this-day'>
              <div className='item-this-day__indicator'>
                <IndicatorSvgSelector id='temp' />
              </div>
              <div className='item-this-day__indicator-name'>Температура:</div>
              <div className='item-this-day__indicator-value'>
                {Math.round(weather.main.temp)}° ощущается как{' '}
                {Math.round(weather.main.feels_like)}°
              </div>
            </div>
            <div className='this-day-info__item item-this-day'>
              <div className='item-this-day__indicator'>
                <IndicatorSvgSelector id='pressure' />
              </div>
              <div className='item-this-day__indicator-name'>Давление:</div>
              <div className='item-this-day__indicator-value'>
                {weather.main.pressure} мм ртутного столба
              </div>
            </div>
            <div className='this-day-info__item item-this-day'>
              <div className='item-this-day__indicator'>
                <IndicatorSvgSelector id='precipitation' />
              </div>
              <div className='item-this-day__indicator-name'>Влажность:</div>
              <div className='item-this-day__indicator-value'>
                {weather.main.humidity} %
              </div>
            </div>
            <div className='this-day-info__item item-this-day'>
              <div className='item-this-day__indicator'>
                <IndicatorSvgSelector id='wind' />
              </div>
              <div className='item-this-day__indicator-name'>Ветер:</div>
              <div className='item-this-day__indicator-value'>
                {Math.round(weather.wind.speed)} м/с
              </div>
            </div>
          </div>
          <img className='this-day-info__cloud-img' src={Cloud} alt='облако' />
        </div>
      </div>
      <div className='home__hourly-weather hourly-weather'>
        <h2 className='hourly-weather__title'>Ежечасно</h2>
        <div className='hourly__items'>
          {oneCallWeather.hourly
            .slice(1, 26)
            .map((obj: IHourly['hourly'], i) => (
              <div key={i} className='hourly__item item-hourly'>
                <h5 className='item-hourly__date'>
                  {`${getCurrentDay(
                    obj.dt,
                    oneCallWeather.timezone_offset
                  )}.${getCurrentMonthNumber(obj.dt)}`}
                </h5>
                <h4 className='item-hourly__time'>
                  {' '}
                  {`${getCurrentHour(
                    obj.dt,
                    oneCallWeather.timezone_offset
                  )}:00`}
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
      <div className='home__daily-weather daily-weather'>
        <h2 className='daily-weather__title'>Ежедневно</h2>
        <div className='daily__items'>
          {oneCallWeather.daily.slice(1).map((obj: IDaily['daily'], i) => (
            <div key={i} className='daily__item item-daily'>
              <h5 className='item-daily__date'>{`${getCurrentDay(
                obj.dt,
                oneCallWeather.timezone_offset
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
    </div>
  );
};
