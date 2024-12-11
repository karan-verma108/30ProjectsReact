import { useEffect, useState } from 'react';

interface quotesType {
  author: string;
  id: number;
  quote: string;
}

export default function RandomQuotes(): JSX.Element {
  const [quotes, setQuotes]: [
    quotesType,
    React.Dispatch<React.SetStateAction<quotesType>>
  ] = useState<quotesType>({
    author: '',
    id: 0,
    quote: '',
  });

  const fetchData = async () => {
    try {
      const response: Response = await fetch('https://dummyjson.com/quotes');
      if (!response.ok) {
        throw new Error(`HTTP ERROR STATUS ${response.status}`);
      }
      const dataReturned = await response.json();

      const randomQuoteNumber = Math.round(
        Math.random() * dataReturned.quotes.length
      );
      setQuotes(dataReturned.quotes[randomQuoteNumber]);
    } catch (error: unknown) {
      console.log('Sorry we encounted an error', error);
    }
  };

  console.log('quotes', quotes);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='w-full flex h-screen justify-normal bg-slate-400'>
      <div className='w-2/3 mx-auto shadow-lg flex flex-col gap-3 justify-center items-center text-2xl'>
        {quotes.quote}
        <button
          className='shadow-lg px-3 py-2 bg-blue-700 text-white rounded-md hover:text-blue-700 hover:bg-white cursor-pointer'
          onClick={fetchData}
        >
          {quotes.author.length === 0 ? 'Loading' : 'More'}
        </button>
      </div>
    </div>
  );
}
