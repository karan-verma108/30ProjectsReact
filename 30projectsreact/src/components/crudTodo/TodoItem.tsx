export default function TodoItem({
  index,
  item,
  clickedItemId,
  updatedTodoValue,
  setUpdatedTodoValue,
  onSaveClick,
  setClickedItemId,
  handleDeleteTodo,
}: {
  index: number;
  item: string;
  clickedItemId: number | undefined;
  updatedTodoValue: string;
  setUpdatedTodoValue: React.Dispatch<React.SetStateAction<string>>;
  onSaveClick: (index: number) => void;
  setClickedItemId: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleDeleteTodo: (index: number) => void;
}): JSX.Element {
  return (
    <div
      className={`flex gap-2 bg-slate-300 text-black rounded-md p-1 ${
        clickedItemId === index ? 'scale-125' : ''
      }`}
    >
      <input
        type='text'
        value={clickedItemId === index ? updatedTodoValue : item}
        disabled={clickedItemId !== index}
        placeholder={clickedItemId === index ? item : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          return clickedItemId === index && setUpdatedTodoValue(e.target.value);
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
  );
}
