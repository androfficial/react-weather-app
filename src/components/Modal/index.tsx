/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import { MouseEvent, useRef } from 'react';

import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';
import { setShowModal } from '../../store/slices/currentWeather';

export const Modal = () => {
  const dispatch = useCustomDispatch();
  const { showModal } = useCustomSelector(selectCurrentWeatherData);
  const modalBackground = useRef<HTMLDivElement>(null);

  const handleShowModal = () => dispatch(setShowModal(false));

  const stopContentPropagation = (e: MouseEvent<HTMLDivElement>): void =>
    e.stopPropagation();

  return (
    <div className={cn('modal', showModal && 'open')}>
      <div
        onClick={handleShowModal}
        ref={modalBackground}
        className='modal__body'
      >
        <div onClick={stopContentPropagation} className='modal__content'>
          <div className='modal__top'>
            <h6 className='modal__title'>
              К сожалению, указанный город не найден
            </h6>
          </div>
          <div className='modal__bottom'>
            <button
              onClick={handleShowModal}
              className='modal__btn btn'
              type='button'
            >
              <span>Ясно</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
