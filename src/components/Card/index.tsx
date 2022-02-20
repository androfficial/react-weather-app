import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { IDay } from '../../types/weather';

interface ICardProps {
  day: IDay;
}

export const Card = ({ day }: ICardProps) => {
  return (
    <div className='days__card card-days'>
      <div className='card-days__day'>{day.day}</div>
      <div className='card-days__day-info'>{day.day_info}</div>
      <div className='card-days__img'>
        <GlobalSvgSelector id={day.icon_id} />
      </div>
      <div className='card-days__temp-day'>{day.temp_day}</div>
      <div className='card-days__temp-night'>{day.temp_day}</div>
      <div className='card-days__info'>{day.info}</div>
    </div>
  );
};
