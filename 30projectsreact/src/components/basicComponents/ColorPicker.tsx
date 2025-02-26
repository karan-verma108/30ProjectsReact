import React, { useState } from 'react';

export default function ColorPicker(): JSX.Element {
  const [color, setColor]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  console.log('color', color);

  return (
    <div style={{ backgroundColor: color }} className='h-screen'>
      <h1 className='text-7xl text-center'>Color Picker</h1>
      <input
        type='color'
        id='color'
        name='color'
        value={color}
        className='border border-black'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setColor(e.target.value)
        }
      />
    </div>
  );
}
