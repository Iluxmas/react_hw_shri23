'use client';

import React from 'react';
import FilmItem from '../FilmItem/FilmItem';
import { IMovie } from '@/types/api';

import styles from './moviesList.module.css';

function MoviesList({ filteredMovies }: { filteredMovies: IMovie[] }) {
  return (
    <div className={styles.films__content}>
      <ul className={styles.films__list}>
        {filteredMovies && filteredMovies.length > 0 ? (
          filteredMovies.map((movie: IMovie) => <FilmItem key={movie.id} movieData={movie}></FilmItem>)
        ) : (
          <h1>Фильмов не найдено, попробуйте смягчить условия поиска</h1>
        )}
      </ul>
    </div>
  );
}

export default MoviesList;
