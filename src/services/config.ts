import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    units: 'metric',
    lang: 'ru',
    appid: process.env.REACT_APP_API_KEY,
  },
});

// export const handleError = (error) => {
//   if (axios.isAxiosError(error)) {
//     console.error(error.response);

//     return {
//       success: error.response?.data.success as boolean,
//       data: error.response?.data,
//     };
//   }

//   console.error(error);
//   return {
//     success: false,
//     data: error,
//   };
// };
