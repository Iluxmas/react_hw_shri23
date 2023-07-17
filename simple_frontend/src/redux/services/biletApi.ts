import { ICinema, IMovie } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const biletApi = createApi({
  reducerPath: 'biletApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: builder => ({
    getMovies: builder.query<IMovie[], void>({ query: () => 'movies' }),

    getMovie: builder.query({ query: movieId => `movie?movieId=${movieId}` }),

    getCinemas: builder.query<ICinema[], void>({ query: () => 'cinemas' }),

    getCinemaMovies: builder.query({
      query: cinemaId => `movies?cinemaId=${cinemaId}`,
    }),

    getAllReviews: builder.query({ query: () => 'reviews' }),

    getReview: builder.query({
      query: movieId => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetCinemasQuery,
  useGetCinemaMoviesQuery,
  useGetAllReviewsQuery,
  useGetReviewQuery,
} = biletApi;
