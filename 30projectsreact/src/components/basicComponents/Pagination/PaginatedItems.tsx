import { DataType } from './data';

export default function PaginatedItems({
  data,
  startIndex,
  endIndex,
}: {
  data: DataType[];
  startIndex: number;
  endIndex: number;
}): JSX.Element {
  return (
    <div className='flex flex-col gap-2 w-1/2'>
      {data.length > 0 &&
        data.slice(startIndex, endIndex).map((user: DataType) => (
          <div
            key={user.city}
            className='flex flex-col border border-black bg-slate-100 p-3 rounded-md'
          >
            <div className='flex justify-between'>
              <p>id : {user.id}</p>
              <p>aga : {user.age}</p>
            </div>
            <div className='flex justify-between'>
              <p>name :{user.name}</p>
              <p>city :{user.city}</p>
            </div>
            <div></div>
          </div>
        ))}
    </div>
  );
}
