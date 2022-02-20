export const getCurrentDayName = (unixDate: number): string => {
  const day = new Date(unixDate * 1000);
  if (day.getDay() === 0) return 'Воскресенье';
  if (day.getDay() === 1) return 'Понедельник';
  if (day.getDay() === 2) return 'Вторник';
  if (day.getDay() === 3) return 'Среда';
  if (day.getDay() === 4) return 'Четверг';
  if (day.getDay() === 5) return 'Пятница';
  if (day.getDay() === 6) return 'Суббота';
  return '';
};

const addZero = (num: number): string | number => {
  if (num < 10) return `0${num}`;
  return num;
};

export const getCityTime = (timezone: number): string => {
  const time = new Date();
  const utc = time.getTime() + time.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 1000 * timezone);
  const hours = addZero(nd.getHours());
  const minutes = addZero(nd.getMinutes());

  return `${hours}:${minutes}`;
};

export const getCurrentDay = (unixDate: number, timezone: number): number =>
  new Date((unixDate + timezone - 7200) * 1000).getDate();

export const getCurrentMonthNumber = (unixDate: number): number | string => {
  const month = new Date(unixDate * 1000);
  return month.getMonth().toString().length === 1
    ? `0${month.getMonth() + 1}`
    : month.getMonth() + 1;
};

export const getCurrentHour = (
  unixDate: number,
  timezone: number
): number | string => {
  const hour = new Date((unixDate + timezone - 7200) * 1000).getHours() + 1;
  return hour === 24 ? '00' : hour;
};

export const windSpeedToKm = (mps: number): number => mps * 3.6;
