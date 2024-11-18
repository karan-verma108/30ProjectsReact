import { useEffect, useState } from 'react';

interface DataType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function DisplayAPIData(): JSX.Element {
  const [fetchedData, setFetchedData]: [
    DataType[] | undefined,
    React.Dispatch<React.SetStateAction<DataType[] | undefined>>
  ] = useState<DataType[] | undefined>();
  const fetchApiData = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await data.json();
      setFetchedData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      {fetchedData &&
        fetchedData?.length > 0 &&
        fetchedData.map((item: DataType) => (
          <h1 key={item.body}>Title : {item.title}</h1>
        ))}
    </div>
  );
}
