export interface IState {
  weather: IWeather;
  oneCallWeather: IOneCall;
  location: ILocation;
  isLoading: boolean;
  response: IResponse;
}

export interface IDaily {
  daily: {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    clouds: number;
    pop: number;
    snow: number;
    uvi: number;
  };
}

export interface IHourly {
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    pop: number;
  };
}

export interface IWeather {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface IOneCall {
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: { day: number; night: number; eve: number; morn: number };
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      uvi: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }
  ];
  hourly: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pop: number;
      pressure: number;
      temp: number;
      uvi: number;
      visibility: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }
  ];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface IDay {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export interface ISelectedCity {
  value: string;
  label: string;
}

export interface IGetWeather {
  city?: string;
  lat?: number;
  lon?: number;
}

export interface ILocation {
  access: boolean;
  message: string;
}

export interface IResponse {
  status: number;
  message: string;
}

export interface IBadResponse {
  cod: string;
  message: string;
}