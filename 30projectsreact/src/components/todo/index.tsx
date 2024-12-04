import { useState } from 'react';
import TodoItem from './TodoItem';

export default function Todo(): JSX.Element {
  const [userInput, setUserInput]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [todoList, setTodoList]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (userInput.length > 0) {
      const myTodos: string[] = [...todoList];
      myTodos.push(userInput);
      setTodoList(myTodos);
    }
    setUserInput('');
  };

  const handleRemoveItem = (removeItem: string) => {
    const myTodo: string[] = [...todoList];
    const indexOfRemoveItem: number = myTodo.indexOf(removeItem);
    setTodoList(() => {
      if (myTodo.includes(removeItem)) {
        return myTodo.splice(indexOfRemoveItem, 1);
      } else {
        return myTodo;
      }
    });
  };

  return (
    <div className='w-full h-screen bg-yellow-200 flex flex-col gap-7 justify-center items-center'>
      <h1 className='text-4xl text-blue-600'>Add Todooooos</h1>
      <div>
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input
            className='text-xl rounded-md ps-3 py-2'
            type='text'
            id='todo'
            name='todo'
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput(e.target.value)
            }
            placeholder='enter todo'
          />
          <button
            className='text-xl bg-yellow-500 text-white p-3 rounded-md'
            type='submit'
          >
            Add
          </button>
        </form>
        {todoList.length > 0 &&
          todoList.map((todoItem: string) => (
            <TodoItem
              key={todoItem}
              item={todoItem}
              onClick={() => handleRemoveItem(todoItem)}
            />
          ))}
      </div>
    </div>
  );
}
