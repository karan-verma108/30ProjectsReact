import { useState } from 'react';

export default function Counter(): JSX.Element {
  const [count, setCount]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);
  return (
    <>
      <p>Count is : {count}</p>
      <div className='flex gap-2'>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </>
  );
}
