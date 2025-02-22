import { MoviesDataType } from './moviesData';

export default function MovieItem({
  item,
}: {
  item: MoviesDataType;
}): JSX.Element {
  return (
    <div className='p-2.5 flex flex-col gap-2 w-64'>
      <div className='w-full h-44'>
        <img src={item.imageUrl} alt={item.title} className='w-full h-fit' />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Genre : {item.genre}</p>
        <p>Title : {item.title}</p>
        <p>Year : {item.releaseYear}</p>
        <p>Rating : {item.rating}</p>
        <p>Review : {item.review}</p>
      </div>
    </div>
  );
}
