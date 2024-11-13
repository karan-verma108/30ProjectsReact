import React, { useState } from 'react';

export default function DisplayUserInput(): JSX.Element {
  const [typedText, setTypedText]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypedText(e.target.value);
  };
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Write anything here</h1>
        <input
          type='text'
          className='border p-2 border-black rounded-md'
          placeholder='enter anything'
          onChange={handleChange}
        />
        <p className='underline italic'>{typedText}</p>
      </div>
    </div>
  );
}
