import React, { useState } from 'react';

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
          <div
            key={`${todoItem}-${index}`}
            className={`flex gap-2 bg-slate-300 text-black rounded-md p-1 ${
              clickedItemId === index ? 'scale-125' : ''
            }`}
          >
            <input
              type='text'
              value={clickedItemId === index ? updatedTodoValue : todoItem}
              disabled={clickedItemId !== index}
              placeholder={clickedItemId === index ? todoItem : ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                return (
                  clickedItemId === index && setUpdatedTodoValue(e.target.value)
                );
              }}
            />
            {clickedItemId === index ? (
              <button
                onClick={() => onSaveClick(index)}
                className='text-white bg-green-600 rounded-lg p-2 cursor-pointer'
              >
                save
              </button>
            ) : (
              <div className='flex gap-2'>
                <button
                  onClick={() => setClickedItemId(index)}
                  className='text-white rounded-lg p-2 cursor-pointer bg-orange-500'
                >
                  edit
                </button>
                <button
                  className='bg-red-500 text-white rounded-lg p-2 cursor-pointer'
                  onClick={() => handleDeleteTodo(index)}
                >
                  delete
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
