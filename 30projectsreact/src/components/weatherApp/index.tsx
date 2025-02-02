import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import { apiKey } from '../../constants';

export default function WeatherApp(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({});

  const [time, setTime]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [isWeatherIconClicked, setIsWeatherIconClicked]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const [isDropdownMenuOpen, setIsDropdownMenuOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const [currentBackground, setCurrentBackground]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const tempFromApi: string = (data?.main?.temp - 273.15).toFixed(2);
  let tempInCelcius: number = Number(tempFromApi);

  const handleCurrentBackground = (): void => {
    tempInCelcius = Number(Math.round(tempInCelcius));

    const currentDay: Date = new Date();
    const currentHour: number = currentDay.getHours();

    if (tempInCelcius > 20 && currentHour < 12) {
      setCurrentBackground('normalDay');
    } else if (tempInCelcius < 20 && currentHour < 20) {
      setCurrentBackground('coldDay');
    } else if (tempInCelcius > 20 && currentHour > 12 && currentHour <= 16) {
      setCurrentBackground('hotDay');
    } else if (currentHour >= 16 && currentHour <= 18) {
      setCurrentBackground('evening');
    } else if (currentHour >= 18 && currentHour <= 23) {
      setCurrentBackground('night');
    } else {
      setCurrentBackground('');
    }
  };

  console.log('current bg', currentBackground);

  const getWeatherDetails = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude: latitude, longitude: longitude });
          },
          (error) => {
            console.log('error', error);
            reject('Error : Fetching user location coordinates');
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      }
    });
  };

  function handleFetchData(value: unknown): void | PromiseLike<void> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { latitude, longitude }: any = value;

    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log('err', err));
  }

  const getCurrentTime = (): string => {
    const time = new Date();
    let hours: number | string = time.getHours();
    let minutes: number | string = time.getMinutes();
    let seconds: number | string = time.getSeconds();
    let meridiem = 'AM';

    if (hours > 12) {
      hours = hours - 12;
      meridiem = 'PM';
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  };

  const getDayAndTime = () => {
    const date = new Date();
    const todayDate = date.toLocaleDateString();
    const day = date.getDay();
    let dayResult;

    switch (day) {
      case 1:
        dayResult = 'Monday';
        break;

      case 2:
        dayResult = 'Tuesday';
        break;
      case 3:
        dayResult = 'Wednesday';
        break;
      case 4:
        dayResult = 'Thursday';
        break;
      case 5:
        dayResult = 'Friday';
        break;
      case 6:
        dayResult = 'Saturday';
        break;
      case 7:
        dayResult = 'Sunday';
        break;

      default:
        dayResult = '';
    }

    return { todayDate, dayResult };
  };

  const { todayDate, dayResult }: { todayDate: string; dayResult: string } =
    getDayAndTime();

  const bgColor: string | null = localStorage.getItem('bgColor');

  const dropdownMenu: HTMLElement | null =
    document.getElementById('dropdown-menu');
  const searchInput: HTMLInputElement | null = document.getElementById(
    'search-input'
  ) as HTMLInputElement | null;

  searchInput?.addEventListener('input', () => {
    const searchTerm: string = searchInput?.value?.toLowerCase() ?? '';
    const items: NodeListOf<HTMLAnchorElement> | undefined =
      dropdownMenu?.querySelectorAll('a');

    items?.forEach((item) => {
      const text = item?.textContent?.toLowerCase();
      if (text?.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  useEffect(() => {
    const timeResult: string = getCurrentTime();
    setTime(timeResult);
  }, []);

  useEffect(() => {
    getWeatherDetails()
      .then(handleFetchData)
      .catch((err) => console.log('err', err));
  }, []);

  useEffect(() => {
    if (!isNaN(tempInCelcius)) {
      console.log('fn is working');
      handleCurrentBackground();
    }
  }, [tempInCelcius]);

  console.log('color', currentBackground);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        bgColor === 'bg-cyan-200' ? 'text-black' : 'text-white'
      }`}
    >
      {data && data !== undefined && (
        <div
          className={`xl:w-1/4 w-full flex flex-col gap-28 h-screen rounded-lg bg-normalDay mx-auto bg-no-repeat bg-cover ${
            bgColor ?? ''
          } p-2.5 shadow-2xl`}
        >
          <div className='flex justify-between'>
            <div>
              <p
                className={`${
                  bgColor === 'bg-cyan-200' ? 'text-black' : 'text-white'
                }`}
              >
                {time}
              </p>
            </div>
            <div>
              {!isWeatherIconClicked && bgColor === 'bg-cyan-200' ? (
                <MoonIcon
                  className='w-6 text-black cursor-pointer'
                  onClick={() => {
                    localStorage.setItem('bgColor', 'bg-violet-800');
                    setIsWeatherIconClicked(true);
                  }}
                />
              ) : (
                <SunIcon
                  className='w-6 text-white cursor-pointer'
                  onClick={() => {
                    localStorage.setItem('bgColor', 'bg-cyan-200');
                    setIsWeatherIconClicked(false);
                  }}
                />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative group'>
              <button
                className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
                onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
              >
                <span className='mr-2'>{data?.name}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 ml-2 -mr-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {isDropdownMenuOpen && (
                <div className='absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1'>
                  <input
                    id='search-input'
                    className='block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none'
                    type='text'
                    placeholder='Search items'
                    autoComplete='off'
                  />
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
                  >
                    Uppercase
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
                  >
                    Lowercase
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
                  >
                    Camel Case
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md'
                  >
                    Kebab Case
                  </a>
                </div>
              )}
            </div>
          </div>

          <div
            className={`w-2/3 h-1/3 flex flex-col text-xl justify-center items-center rounded-xl mx-auto ${
              bgColor === 'bg-violet-800'
                ? 'bg-black bg-opacity-50'
                : 'bg-white'
            } text-2xl`}
          >
            <p>{todayDate}</p>
            <p>{dayResult}</p>
            <p>{tempInCelcius}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}
