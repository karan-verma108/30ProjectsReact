import { useReducer } from 'react';
import { InitialStateType, TodoAction } from '../../../types';

export default function TodoWithReducer(): JSX.Element {
  const initialState: InitialStateType = {
    todoItem: '',
    todoItems: [],
  };

  const todoReducer = (state: any, action: TodoAction) => {
    // console.log('action', action);

    // console.log('state.todoItems', state.todoItems);
    // console.log('action.payload', action.payload);

    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          todoItems: [...state.todoItems, action.payload],
          todoItem: '',
        };
      case 'UPDATE_TODO_ITEM':
        return { ...state, todoItem: action.payload };

      default:
        break;
    }
  };

  const [state, dispatch]: [InitialStateType, React.Dispatch<TodoAction>] =
    useReducer(todoReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_TODO_ITEM', payload: e.target.value });
  };

  console.log('state', state);

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1>Todo with useReducer</h1>
      <div className='flex gap-3'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'ADD', payload: state.todoItem });
          }}
        >
          <input
            className='border border-slate-300 '
            type='text'
            placeholder='enter your todo'
            value={state?.todoItem}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='py-1 px-2 rounded-md bg-orange-400 text-white cursor-pointer'
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
