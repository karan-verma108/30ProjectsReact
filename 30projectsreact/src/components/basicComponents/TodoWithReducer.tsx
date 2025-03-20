import { useReducer } from 'react';
import { InitialStateType, TodoAction } from '../../../types';

export default function TodoWithReducer(): JSX.Element {
  const initialState: InitialStateType = {
    todoItem: '',
    todoItems: [],
    editTodoId: null,
    editedTodoValue: '',
  };

  const todoReducer = (state: any, action: TodoAction) => {
    switch (action.type) {
      case 'ADD':
        return state.todoItem.length > 0
          ? {
              ...state,
              todoItems: [...state.todoItems, action.payload],
              todoItem: '',
              editTodoId: null,
            }
          : { ...state };
      case 'UPDATE_TODO_ITEM':
        return { ...state, todoItem: action.payload };

      case 'DELETE':
        return {
          ...state,
          todoItems: state.todoItems.filter(
            (_, index: number) => index !== action.payload
          ),
        };

      case 'EDIT':
        return { ...state, editTodoId: action.payload };

      case 'HANDLE_EDITED_TODO_ITEM':
        return { ...state, editedTodoValue: action.payload };

      // case 'SAVE':
      //   return {
      //     ...state,
      //     todoItems: [
      //       ...state.todoItems,
      //       state.todoItems.splice(action.payload, 1, state.editedTodoValue),
      //     ],
      //     editTodoId: null,
      //   };

      default:
        break;
    }
  };

  const [state, dispatch]: [InitialStateType, React.Dispatch<TodoAction>] =
    useReducer(todoReducer, initialState);

  const handleTodoItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_TODO_ITEM', payload: e.target.value });
  };

  const handleEditedTodoItemChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'HANDLE_EDITED_TODO_ITEM', payload: e.target.value });
  };

  console.log('state', state);

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1>Todo with useReducer</h1>
      <div className='flex flex-col gap-3'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: 'ADD', payload: state.todoItem });
          }}
        >
          <input
            className='border border-slate-300'
            type='text'
            placeholder='enter your todo'
            value={state?.todoItem}
            onChange={handleTodoItemChange}
          />
          <button
            type='submit'
            className='py-1 px-2 rounded-md bg-orange-400 text-white cursor-pointer'
          >
            Go
          </button>
        </form>
        <div className='flex flex-col gap-4'>
          {state?.todoItems?.length > 0 &&
            state?.todoItems?.map?.((item: string, index: number) => (
              <div
                key={`${item}-${index}`}
                className='flex justify-between items-center bg-amber-100'
              >
                <input
                  value={
                    state.editTodoId === index ? state.editedTodoValue : item
                  }
                  id='item'
                  name='item'
                  placeholder={state.editTodoId === index ? item : ''}
                  autoFocus={state.editTodoId === index}
                  disabled={state.editTodoId !== index}
                  onChange={handleEditedTodoItemChange}
                  className='disabled:cursor-not-allowed disabled:bg-slate-200 focus:scale-105 transition-all duration-200'
                />
                {state.editTodoId !== index ? (
                  <div className='flex gap-2'>
                    <button
                      onClick={() =>
                        dispatch({ type: 'DELETE', payload: index })
                      }
                      className='bg-red-600 text-white rounded-sm py-1 px-2 cursor-pointer'
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => dispatch({ type: 'EDIT', payload: index })}
                      className='bg-orange-600 text-white rounded-sm py-1 px-2 cursor-pointer'
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch({ type: 'SAVE', payload: index })}
                    className='bg-green-600 text-white rounded-sm py-1 px-2 cursor-pointer'
                  >
                    Save
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
