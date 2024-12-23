export default function TodoItem({
  item,
  index,
  onClick,
}: {
  item: string;
  index : number;
  // onClick: (item: string) => void; //using item
  onClick: (index: number) => void; //using index
}): JSX.Element {
  return (
    <div className='flex justify-between text-lg bg-cyan-200 shadow-lg mt-4 rounded-md p-2'>
      <p className='text-blue-700'>{item}</p>
      <span
        className='text-blue-700 cursor-pointer'
        onClick={() => onClick(index)}
      >
        X
      </span>
    </div>
  );
}
