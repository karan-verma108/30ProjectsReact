import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

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
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&`
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

  const bgColor: string | null = localStorage.getItem('bgColor');

  setInterval(() => {
    const timeResult = getCurrentTime();
    setTime(timeResult);
  }, 1000);

  useEffect(() => {
    getWeatherDetails()
      .then(handleFetchData)
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        bgColor === 'bg-cyan-200' ? 'text-black' : 'text-white'
      }`}
    >
      {data && data !== undefined && (
        <div
          className={`border border-black w-1/4 h-3/4 rounded-lg ${
            bgColor ?? ''
          } p-2.5`}
        >
          <div className='border border-black flex justify-between h-1/3'>
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
          <div className='border border-black w-full h-1/2 flex flex-col justify-center items-center text-2xl'>
            <p>Your city is : {data?.name}</p>
            <p>Your country is : {data?.sys?.country}</p>
            <p>
              Your temperature is : {(data?.main?.temp - 273.15).toFixed(2)}°C
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
