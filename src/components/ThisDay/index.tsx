import { getCityTime } from '../../helpers/dataFormat';

interface IThisDayProps {
  temp: number;
  icon: string;
  description: string;
  timezone: number;
  city: string;
}

export const ThisDay = ({
  temp,
  icon,
  description,
  timezone,
  city,
}: IThisDayProps) => {
  return (
    <div className='home__this-day this-day'>
      <div className='this-day__top'>
        <div className='this-day__wrapper'>
          <div className='this-day__temp'>{Math.round(temp)}°</div>
          <div className='this-day__name'>Сегодня</div>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
      <div className='this-day__bottom'>
        <div className='this-day__time'>
          Время: <span>{getCityTime(timezone)}</span>
        </div>
        <div className='this-day__city'>
          Город: <span>{city}</span>
        </div>
      </div>
    </div>
  );
};
