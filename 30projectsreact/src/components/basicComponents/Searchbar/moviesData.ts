export interface MoviesDataType {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  review: string;
  imageUrl: string;
}

export const moviesData: MoviesDataType[] = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    releaseYear: 1994,
    rating: 9.2,
    review: 'Highly rated, highly recommended. A timeless classic.',
    imageUrl:
      'https://preview.redd.it/i-watched-the-shawshank-redemption-1994-v0-dplk7hisodid1.jpeg?auto=webp&s=60ae268fffa7b7f84978caa41bc7b8df164e389f',
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime, Drama',
    releaseYear: 1972,
    rating: 9.2,
    review:
      'A powerful and gripping film that sets the standard for gangster movies.',
    imageUrl:
      'https://cdn.prod.website-files.com/610c5007d3b7ee36cc3e07c1/6411368384bd996818c7dc1c_970324_ra409.jpeg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    genre: 'Action, Crime',
    releaseYear: 2008,
    rating: 9.0,
    review:
      "Heath Ledger's iconic performance as the Joker makes this movie unforgettable.",
    imageUrl:
      'https://theconsultingdetectivesblog.com/wp-content/uploads/2014/06/the-dark-knight-original.jpg',
  },
  {
    id: 4,
    title: '12 Angry Men',
    genre: 'Drama',
    releaseYear: 1957,
    rating: 9.0,
    review:
      'A gripping drama that explores the importance of critical thinking and the impact of individual perspectives.',
    imageUrl:
      'https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c._SX1080_FMjpg_.jpg',
  },
  {
    id: 5,
    title: "Schindler's List",
    genre: 'Biography, Drama, History',
    releaseYear: 1993,
    rating: 8.9,
    review:
      'A powerful and emotional portrayal of one of the darkest periods in human history.',
    imageUrl:
      'https://i.guim.co.uk/img/media/208d00c732eeed823ec55afe35faf252843e0c59/0_47_2520_1512/master/2520.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2afc817c2c585aa9342fa808b7b4decd',
  },
  {
    id: 6,
    title: 'The Lord of the Rings: The Return of the King',
    genre: 'Adventure, Fantasy',
    releaseYear: 2003,
    rating: 9.2,
    review: 'A satisfying conclusion to the epic trilogy.',
    imageUrl:
      'https://m.media-amazon.com/images/S/pv-target-images/2c70c38075924358afbbf210cab6ddf9ebed7a9d47c87713c8759d5758b7dadb.jpg',
  },
  {
    id: 7,
    title: 'Pulp Fiction',
    genre: 'Crime, Drama',
    releaseYear: 1994,
    rating: 9.2,
    review: 'A crime classic with memorable characters and witty dialogue.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjI5MzgxMTQ4M15BMl5BanBnXkFtZTgwNjczMTk0NzE@._V1_.jpg',
  },
  {
    id: 8,
    title: 'The Good, the Bad and the Ugly',
    genre: 'Western',
    releaseYear: 1966,
    rating: 8.8,
    review:
      'A classic spaghetti western with iconic characters and memorable scenes.',
    imageUrl:
      'https://i1.sndcdn.com/artworks-000115102713-fuznck-t1080x1080.jpg',
  },
  {
    id: 9,
    title: 'Forrest Gump',
    genre: 'Drama, Romance',
    releaseYear: 1994,
    rating: 8.8,
    review:
      'A heartwarming and inspiring film with a memorable performance by Tom Hanks.',
    imageUrl:
      'https://i.guim.co.uk/img/media/78eb1f6bd0f92d4d3cf19f5bddda1a902e2a6fcd/0_95_2371_1422/master/2371.jpg?width=1200&quality=85&auto=format&fit=max&s=e38a50cd354d94cc959a8a34f6536a7c',
  },
  {
    id: 10,
    title: 'Inception',
    genre: 'Action, Sci-Fi',
    releaseYear: 2010,
    rating: 8.8,
    review:
      'A mind-bending and visually stunning film that explores the nature of reality.',
    imageUrl:
      'https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg',
  },
  {
    id: 11,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    genre: 'Adventure, Fantasy',
    releaseYear: 2001,
    rating: 8.8,
    review:
      'A thrilling and epic journey that sets the stage for the iconic trilogy.',
    imageUrl:
      'https://cdn.britannica.com/34/201734-050-2B1ECD3E/Dominic-Monaghan-Merry-scene-Elijah-Wood-Frodo.jpg',
  },
  {
    id: 12,
    title: 'Fight Club',
    genre: 'Drama',
    releaseYear: 1999,
    rating: 8.8,
    review:
      'A dark and subversive exploration of toxic masculinity and consumer culture.',
    imageUrl:
      'https://cdn.britannica.com/34/201734-050-2B1ECD3E/Dominic-Monaghan-Merry-scene-Elijah-Wood-Frodo.jpg',
  },
];
