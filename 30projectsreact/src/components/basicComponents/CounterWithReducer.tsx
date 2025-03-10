import { useReducer } from 'react';

interface ActionType {
  type: string;
}
export default function CounterWithReducer(): JSX.Element {
  const initialValue: number = 0;

  const counterReducerFn = (state: number, action: ActionType) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;

      case 'DECREMENT':
        return state - 1;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducerFn, initialValue);
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1 className='text-4xl text-center'>Counter app</h1>
      <div className='flex gap-3 items-center'>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className='p-2 rounded-md bg-blue-400 text-white cursor-pointer'
        >
          Increment
        </button>
        <p>{state}</p>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className='p-2 rounded-md bg-red-400 text-white cursor-pointer'
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
