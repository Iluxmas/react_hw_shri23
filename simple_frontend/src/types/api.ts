export interface IMovie {
  description: string;
  director: string;
  genre: Genres;
  id: string;
  posterUrl: string;
  rating: number;
  releaseYear: number;
  reviewIds: IReview[];
  title: string;
}

export interface ICinema {
  id: string;
  movieIds: string[];
  name: string;
}

export interface IReview {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export type Genres = 'horror' | 'fantasy' | 'comedy' | 'action' | 'ужасы' | 'фэнтези' | 'экшен' | 'комедия'
