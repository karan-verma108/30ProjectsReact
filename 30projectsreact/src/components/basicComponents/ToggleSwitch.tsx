import { useState } from 'react';

export default function ToggleSwitch(): JSX.Element {
  const [isActive, setIsActive]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);
  return (
    <div>
      <h1 className='text-3xl'>welcome to toggle switch</h1>

      <h2 className='text-2xl'>Click to the checkbox to show hidden message</h2>
      <input
        type='checkbox'
        className='scale-150 ms-3'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIsActive(e.target.checked)
        }
      />
      <p className={`text-4xl italic ${isActive ? 'block' : 'hidden'} `}>
        why did you click on it 😅
      </p>
    </div>
  );
}
