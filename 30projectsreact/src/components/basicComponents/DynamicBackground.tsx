import { useState } from 'react';

export default function DynamicBackground(): JSX.Element {
  const [boxColor, setBoxColor]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('rgb(0,0,0)');

  const handleBoxClick = (): void => {
    const red: number = Math.round(Math.random() * 100);
    const green: number = Math.round(Math.random() * 200);
    const blue: number = Math.round(Math.random() * 255);
    setBoxColor(`rgb(${red},${green},${blue})`);
  };

  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-2xl'>
        Click inside the below box to change its color
      </h1>
      <div
        className='w-1/2 h-1/2 border border-black cursor-pointer'
        onClick={handleBoxClick}
        style={{ backgroundColor: boxColor }}
      ></div>
    </div>
  );
}
