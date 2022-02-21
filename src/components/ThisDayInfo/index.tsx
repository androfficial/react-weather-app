import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector';
import Cloud from '../../assets/images/cloud.png';

interface IThisDayInfoProps {
  temp: number;
  feels: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
}

export const ThisDayInfo = ({
  temp,
  feels,
  pressure,
  humidity,
  wind_speed,
}: IThisDayInfoProps) => {
  return (
    <div className='home__this-day-info this-day-info'>
      <div className='this-day-info__items'>
        <div className='this-day-info__item item-this-day'>
          <div className='item-this-day__indicator'>
            <IndicatorSvgSelector id='temp' />
          </div>
          <div className='item-this-day__indicator-name'>Температура:</div>
          <div className='item-this-day__indicator-value'>
            {Math.round(temp)}° ощущается как {Math.round(feels)}°
          </div>
        </div>
        <div className='this-day-info__item item-this-day'>
          <div className='item-this-day__indicator'>
            <IndicatorSvgSelector id='pressure' />
          </div>
          <div className='item-this-day__indicator-name'>Давление:</div>
          <div className='item-this-day__indicator-value'>
            {pressure} мм ртутного столба
          </div>
        </div>
        <div className='this-day-info__item item-this-day'>
          <div className='item-this-day__indicator'>
            <IndicatorSvgSelector id='precipitation' />
          </div>
          <div className='item-this-day__indicator-name'>Влажность:</div>
          <div className='item-this-day__indicator-value'>{humidity} %</div>
        </div>
        <div className='this-day-info__item item-this-day'>
          <div className='item-this-day__indicator'>
            <IndicatorSvgSelector id='wind' />
          </div>
          <div className='item-this-day__indicator-name'>Ветер:</div>
          <div className='item-this-day__indicator-value'>
            {Math.round(wind_speed)} м/с
          </div>
        </div>
      </div>
      <img className='this-day-info__cloud-img' src={Cloud} alt='облако' />
    </div>
  );
};
