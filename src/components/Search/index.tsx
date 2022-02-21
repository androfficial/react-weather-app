import cn from 'classnames';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Theme } from '../../context/ThemeContext';
import { useCustomDispatch } from '../../hooks/store';
import { useTheme } from '../../hooks/useTheme';
import {
  fetchCurrentWeather,
  setIsLoading,
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
  const { theme } = useTheme();
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (value.trim() && e.key === 'Enter') {
      dispatch(setIsLoading(true));
      dispatch(fetchCurrentWeather({ city: value }));
    }
  };

  const onSearchBtnClick = (): void => {
    if (value.trim()) {
      dispatch(setIsLoading(true));
      dispatch(fetchCurrentWeather({ city: value }));
    }
  };

  return (
    <div className={cn('search', theme === Theme.DARK && 'dark-theme')}>
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
