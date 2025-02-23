import { useState } from 'react';

import { data } from './data';
import PaginatedItems from './PaginatedItems';
import PaginationCTAs from './PaginationCTAs';

export default function Pagination(): JSX.Element {
  const [startIndex, setStartIndex]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(0);
  const [endIndex, setEndIndex]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState<number>(3);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const event: HTMLButtonElement = e.currentTarget as HTMLButtonElement;
    if (event.value === 'next') {
      if (data.slice(endIndex, data.length).length >= 3) {
        setEndIndex((prevValue: number) => prevValue + 3);
      } else {
        setEndIndex(data.length);
      }
      setStartIndex(endIndex);
    }

    if (event.value === 'prev') {
      setStartIndex((prevValue: number) => prevValue - 3);
      setEndIndex(startIndex);
    }
  };

  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-6xl'>Custom Pagination</h1>
      <p className='text-3xl'>Data</p>
      <PaginatedItems data={data} startIndex={startIndex} endIndex={endIndex} />

      <div>
        <p>Items on page : {data.slice(startIndex, endIndex).length}</p>
        <p>Total items : {data.length}</p>
      </div>

      <PaginationCTAs
        data={data}
        startIndex={startIndex}
        endIndex={endIndex}
        onPaginationButtonClick={handleButtonClick}
      />
    </div>
  );
}
