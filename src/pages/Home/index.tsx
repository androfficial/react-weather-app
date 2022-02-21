import { Daily, Hourly, ThisDay, ThisDayInfo } from '../../components';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';

export const Home = () => {
  const { weather, oneCallWeather } = useCustomSelector(
    selectCurrentWeatherData
  );

  return (
    <div className='home'>
      <div className='home__wrapper'>
        <ThisDay
          temp={weather.main.temp}
          icon={weather.weather[0].icon}
          description={weather.weather[0].description}
          timezone={weather.timezone}
          city={weather.name}
        />
        <ThisDayInfo
          temp={weather.main.temp}
          feels={weather.main.feels_like}
          pressure={weather.main.pressure}
          humidity={weather.main.humidity}
          wind_speed={weather.wind.speed}
        />
      </div>
      <Hourly
        hourly={oneCallWeather.hourly}
        timezone={oneCallWeather.timezone_offset}
      />
      <Daily
        daily={oneCallWeather.daily}
        timezone={oneCallWeather.timezone_offset}
      />
    </div>
  );
};
