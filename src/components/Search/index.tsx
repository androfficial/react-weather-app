import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useCustomDispatch } from '../../hooks/store';
import {
  fetchCurrentWeather,
  toggleIsLoading,
} from '../../store/slices/currentWeather';

interface ISearchProps {
  message: string;
  response: {
    status: number;
    message: string;
  };
}

export const Search = ({ message, response }: ISearchProps) => {
  const dispatch = useCustomDispatch();
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (value.trim() && e.key === 'Enter') {
      dispatch(toggleIsLoading(true));
      dispatch(fetchCurrentWeather({ city: value }));
    }
  };

  const onSearchBtnClick = (): void => {
    if (value.trim()) {
      dispatch(toggleIsLoading(true));
      dispatch(fetchCurrentWeather({ city: value }));
    }
  };

  return (
    <div className='search'>
      <strong className='search__error-text'>{message}</strong>
      <div className='search__input-wrapper'>
        <input
          onKeyPress={onKeyPress}
          onChange={handleChangeValue}
          value={value}
          className='search__input input'
          type='text'
          placeholder='Поиск города...'
        />
        <button
          onClick={onSearchBtnClick}
          className='search__btn search-btn'
          type='button'
        >
          <GlobalSvgSelector id='search' />
        </button>
      </div>
      {response.message === 'city not found' && (
        <div className='search__error error-search'>
          <strong className='error-search__text'>
            Не удалось найти такой город
          </strong>
        </div>
      )}
    </div>
  );
};