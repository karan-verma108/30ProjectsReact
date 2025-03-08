import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function CrudTodo(): JSX.Element {
  const [todoValue, setTodoValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [todoItems, setTodoItems]: [
    string[],
    React.Dispatch<React.SetStateAction<string[]>>
  ] = useState<string[]>([]);

  const [updatedTodoValue, setUpdatedTodoValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const [clickedItemId, setClickedItemId]: [
    number | undefined,
    React.Dispatch<React.SetStateAction<number | undefined>>
  ] = useState<number | undefined>();

  const handleTodoValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoValue.length > 0) {
      setTodoItems((prevValues: string[]) => {
        return [todoValue, ...prevValues];
      });
      setTodoValue('');
    }
  };

  const handleDeleteTodo = (deleteId: number) => {
    const itemsAfterDeletion = todoItems.filter(
      (_: string, index: number) => index !== deleteId
    );

    setTodoItems(itemsAfterDeletion);
  };

  const onSaveClick = (saveItemId: number) => {
    const savedItems = todoItems;
    savedItems.splice(saveItemId, 1, updatedTodoValue);
    setTodoItems(savedItems);
    setClickedItemId(-1);
    setUpdatedTodoValue('');
  };
  return (
    <div className='bg-slate-600 text-white h-screen py-2 flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-center text-5xl'>Your Todooos</h1>
      <form
        className='bg-slate-200 shadow-xl rounded-lg p-3 flex gap-3'
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleTodoSubmit(e)}
      >
        <input
          type='text'
          placeholder='enter your todo'
          value={todoValue}
          className='text-black outline-none text-lg'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleTodoValueChange(e)
          }
        />
        <button
          type='submit'
          className='text-2xl bg-blue-800 rounded-md p-2 cursor-pointer hover:text-blue-800 hover:shadow-xl hover:bg-white'
        >
          Add
        </button>
      </form>
      {todoItems.length > 0 &&
        todoItems.map((todoItem: string, index: number) => (
          <TodoItem
            key={`${todoItem}-${index}`}
            index={index}
            item={todoItem}
            clickedItemId={clickedItemId}
            updatedTodoValue={updatedTodoValue}
            setUpdatedTodoValue={setUpdatedTodoValue}
            onSaveClick={() => onSaveClick(index)}
            setClickedItemId={setClickedItemId}
            handleDeleteTodo={() => handleDeleteTodo(index)}
          />
        ))}
    </div>
  );
}
