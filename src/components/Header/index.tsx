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

export const Header = () => {
  const dispatch = useCustomDispatch();
  const { theme, changeTheme } = useTheme();
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

  const handleChangeTheme = (): void => {
    changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__logo logo'>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className='header__title'>React weather</div>
      </div>
      <div className='header__theme-btn'>
        <button
          onClick={handleChangeTheme}
          className='header__change-theme'
          type='button'
        >
          <GlobalSvgSelector id='change-theme' />
        </button>
      </div>
      <div className='header__wrapper header__wrapper--right'>
        <div
          className={cn(
            'header__input-wrapper',
            theme === Theme.DARK && 'dark-theme'
          )}
        >
          <input
            onKeyPress={onKeyPress}
            onChange={handleChangeValue}
            value={value}
            type='text'
            className='header__input input'
            placeholder='?????????? ????????????...'
          />
          <button
            onClick={onSearchBtnClick}
            className='header__btn search-btn'
            type='button'
          >
            <GlobalSvgSelector id='search' />
          </button>
        </div>
      </div>
    </header>
  );
};
