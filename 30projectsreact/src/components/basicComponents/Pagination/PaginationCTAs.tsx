import { DataType } from './data';

export default function PaginationCTAs({
  data,
  startIndex,
  endIndex,
  onPaginationButtonClick,
}: {
  data: DataType[];
  startIndex: number;
  endIndex: number;
  onPaginationButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}): JSX.Element {
  return (
    <div className='flex gap-3'>
      <button
        aria-label='previous button'
        className={`border p-2 rounded-lg cursor-pointer ${
          startIndex === 0
            ? 'bg-slate-100 text-gray-800 border-black opacity-40 disabled:cursor-not-allowed'
            : 'border-black'
        }`}
        value='prev'
        onClick={onPaginationButtonClick}
        disabled={startIndex === 0}
      >
        Prev
      </button>
      <button
        aria-label='next button'
        className={`border p-2 rounded-lg cursor-pointer ${
          endIndex === data.length
            ? 'bg-slate-100 text-gray-800 border-black opacity-40 disabled:cursor-not-allowed'
            : 'border-black'
        }`}
        value='next'
        onClick={onPaginationButtonClick}
        disabled={endIndex === data.length}
      >
        Next
      </button>
    </div>
  );
}
