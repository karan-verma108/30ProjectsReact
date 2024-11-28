import React, { useState } from 'react';

export default function SpecifiedTimeCounter(): JSX.Element {
  const [time, setTime]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('00:00:00');

  const [myHours, setMyHours]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);

  const [myMinutes, setMyMinutes]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);

  const [mySeconds, setMySeconds]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);

  // const [isTimeSet, setIsTimeSet]: [
  //   boolean,
  //   React.Dispatch<React.SetStateAction<boolean>>
  // ] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    const date: Date = new Date();
    date.setHours(myHours);
    date.setMinutes(myMinutes);
    date.setSeconds(mySeconds);
    setMyHours(0);
    setMyMinutes(0);
    setMySeconds(0);
    setTime(date.toLocaleTimeString());
    printContinuesTime(date);
  };
  console.log('time', time);

  const printContinuesTime = (date: Date) => {
    setInterval(() => {
      date.setSeconds(date.getSeconds() + 1);
      setTime(date.toLocaleTimeString());
    }, 1000);
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1>Welcome to your personalised counter</h1>
      <h2>Set any time to your counter</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter Hours'
          id='hours'
          value={myHours}
          name='hours'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMyHours(parseInt(e.target.value))
          }
          className='border border-black'
        />
        <input
          type='number'
          placeholder='Enter Minutes'
          id='minutes'
          value={myMinutes}
          name='minutes'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMyMinutes(parseInt(e.target.value))
          }
          className='border border-black'
        />
        <input
          type='number'
          placeholder='Enter Seconds'
          id='seconds'
          value={mySeconds}
          name='seconds'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMySeconds(parseInt(e.target.value))
          }
          className='border border-black'
        />
        <button className='bg-orange-400' type='submit'>
          Set Time
        </button>
      </form>
      <p>Time : {time}</p>
    </div>
  );
}
