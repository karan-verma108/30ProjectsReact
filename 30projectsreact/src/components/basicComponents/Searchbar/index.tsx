import { useState } from 'react';

import { moviesData, MoviesDataType } from './moviesData';
import MovieItem from './MovieItem';

export default function Sidebar(): JSX.Element {
  const [movieList, setMovieList]: [
    MoviesDataType[],
    React.Dispatch<React.SetStateAction<MoviesDataType[]>>
  ] = useState<MoviesDataType[]>(moviesData);

  const [enteredMovie, setEnteredMovie]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>('');

  const handleMovieChange = (movieName: string) => {
    setEnteredMovie(movieName);
    const newMovieList: MoviesDataType[] | undefined = moviesData.filter(
      (movieItem: MoviesDataType) =>
        movieItem.title
          .toLocaleLowerCase()
          .includes(movieName.toLocaleLowerCase())
    );
    setMovieList(newMovieList);
  };
  return (
    <div className='flex flex-col gap-5 my-10 mx-auto w-full justify-center items-center'>
      <h1 className='text-4xl text-center'>Highest grossing movies</h1>

      <input
        type='text'
        placeholder='Search your favorite movie'
        id='movie'
        name='movie'
        value={enteredMovie}
        className='p-2 rounded-lg w-1/2'
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleMovieChange(e.target.value)
        }
      />
      <div className='flex flex-wrap gap-5 justify-center items-center relative'>
        {movieList.length > 0 ? (
          movieList.map((movie: MoviesDataType) => (
            <MovieItem key={movie.id} item={movie} />
          ))
        ) : (
          <h1 className='text-7xl text-center'>No movie found</h1>
        )}
      </div>
    </div>
  );
}
