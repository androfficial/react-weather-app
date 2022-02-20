import Spinner from '../../assets/spinner.svg';

export const Preloader = () => {
  return (
    <div className='preloader'>
      <img src={Spinner} alt='Загрузка...' />
    </div>
  );
};
